import { useEffect } from "react";
import { useState } from "react";

import { getOneTaskById, updateTaskById,updateTaskPriceById, uploadImageTaskById } from "../../../api/services/tasks";
import { showErrorToast } from "../../../utils/showError";
import { showSuccessToast } from "../../../utils/showSuccess";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from "../../../api/services/users";

function useUpdateFormHooks() {
  const navigation = useNavigate();
  const id = useParams().id;
  const [allStatus, setAllStatus] = useState([
    { value: "pending", label: "Pending" },
    { value: "onprogress", label: "On Progress" },
    { value: "finish", label: "Finish" },
  ]);
  const [allStatusTask, setAllStatusTask] = useState([
    { value: "enable", label: "Enable" },
    { value: "disable", label: "Disable" },
  ]);
  const [allServicer, setAllServicer] = useState();
  const [form, setForm] = useState({
    title: "",
    deskripsi: "",
    kode_task: "",
    status: "",
    komentar_service: "",
    gambar_service: "",
    gambar_service_URL: "",
    status_task: "",
    modal_service: "",
    harga_service: "",
    nama_consumen: "",
    no_telp_consumen: "",
    nama_barang: "",
    id_servicer: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
            [`${name}_URL`]: imageUrl,
          });
        }
      } else {
        showErrorToast("Image type must be png/jpg/jpeg");
      }
    } else {
      if (name === "id_servicer") {
        const selectedServicer = allServicer.find(
          (servicer) => servicer._id === value
        );
        setForm({
          ...form,
          [name]: selectedServicer || null, // Use null if no servicer is found
        });
      } else {
        setForm({ ...form, [name]: value });
      }
    }
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await updateTaskById({ form: form, id: id });
      if (data) {
        showSuccessToast("Update Service Success");
      }
    } catch (error) {
      setIsLoading(false);
      showErrorToast(`Error : ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePriceData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await updateTaskPriceById({ form: form, id: id });
      if (data) {
        showSuccessToast("Update Price Success");
      }
    } catch (error) {
      setIsLoading(false);
      showErrorToast(`Error : ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleUpdateImageData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await uploadImageTaskById({ form: form, id: id });
      if (data) {
        showSuccessToast("Update Image Success");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error >> ", error)
      showErrorToast(`Error : ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllServicer = async () => {
      const allServicer = await getAllUsers();
      setAllServicer(allServicer.data);
    };

    const fetchDataTask = async () => {
      const task = await getOneTaskById(id);
      setForm(task.data);
    };
    fetchAllServicer();
    fetchDataTask();
  }, [id]);

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
    handleUpdateData,
    isLoading,
    allStatusTask,
    allStatus,
    allServicer,
    handleUpdatePriceData,
    handleUpdateImageData,
    id
  };
}

export default useUpdateFormHooks;
