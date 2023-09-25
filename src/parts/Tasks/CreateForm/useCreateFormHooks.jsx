import { useEffect } from "react";
import { useState } from "react";

import { createTask} from "../../../api/services/tasks";
import {showErrorToast} from "../../../utils/showError"
import { showSuccessToast } from "../../../utils/showSuccess";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function useCreateFormHooks() {
  const navigation = useNavigate()

  const [form, setForm] = useState({
    title: "",
    deskripsi: "",
    nama_consumen: "",
    no_telp_consumen: "",
    nama_barang: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleOnChange = async (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files[0]) {
      if (
        files[0].type === "image/jpg" ||
        files[0].type === "image/png" ||
        files[0].type === "image/jpeg"
      ) {
        const sizeInMB = files[0].size / (1024 * 1024); // Convert bytes to MB

        if (sizeInMB >= 4) {

          showErrorToast("Image size must be less than 3 MB");
        } else {
          const file = files[0];
          const imageUrl = URL.createObjectURL(file);

          setForm({
            ...form,
            [name]: file,
            [`${name}Url`]: imageUrl,
          });
        }
      } else {
        showErrorToast("Image type must be png/jpg/jpeg");
      }
    } else {
      setForm({ ...form, [name]: value });
    }

  };

  const handleAddData = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const data = await createTask(form)
      console.log("data >>", data)
      if(data){
        showSuccessToast("Add Product Success")
        setTimeout(() => {
          navigation("/tasks")
        },2000)
      }
    } catch (error) {
      setIsLoading(false)
      console.log("error >> ", error)
      showErrorToast(`Error : ${error}`)
    }finally{
      setIsLoading(false)
    }
  }

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
  useEffect(() => {
    if (!token) {
      return navigation("/login");
    } else {
      return;
    }
  }, [token]);
  return {
    handleOnChange,
    form,

    handleAddData,
    isLoading,
    navigation
  };
}

export default useCreateFormHooks;
