
import { useNavigate, useParams } from "react-router-dom";

import { showSuccessToast } from "../../../utils/showSuccess";
import { showErrorToast } from "../../../utils/showError";
import { useEffect, useState } from "react";
import {  resetPassword } from "../../../api/services/users";
import Cookies from "js-cookie";


export default function useResetPasswordFormHooks() {
  const { id } = useParams();
  const navigation = useNavigate()
   const [form, setForm] = useState({
    password : ""
  })
  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await resetPassword({id,form})
        
        showSuccessToast(String(response.message).toUpperCase())

        setTimeout(() => {
            navigation("/users")
        }, 3000)
    } catch (error) {
      const message = "Path `password` (`12345`) is shorter than the minimum allowed length (8)";
      const substring = message.substring(message.indexOf("is shorter"));
        showErrorToast("password "+substring)
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
