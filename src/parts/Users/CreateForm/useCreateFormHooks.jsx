
import { useNavigate } from "react-router-dom";

import { showSuccessToast } from "../../../utils/showSuccess";
import { showErrorToast } from "../../../utils/showError";
import { useEffect, useState } from "react";
import { createOneUser } from "../../../api/services/users";
import Cookies from "js-cookie";


export default function useCreateFormHooks() {
  const navigation = useNavigate()
   const [form, setForm] = useState({
    email : "",
    name : "",
    password : ""
  })
  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await createOneUser(form)
        
        showSuccessToast(String(response.message).toUpperCase())

        setTimeout(() => {
            navigation("/users")
        }, 3000)
    } catch (error) {

        showErrorToast(error.response.data.msg)
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
  return {  handleChange, form , handleSubmit};
}
