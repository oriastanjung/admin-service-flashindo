import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOneUsers, updateOneUser } from "../../../api/services/users";
import { showSuccessToast } from "../../../utils/showSuccess";
import { showErrorToast } from "../../../utils/showError";
import Cookies from "js-cookie";


export default function useUpdateFormHooks() {
  const { id } = useParams();
  const navigation = useNavigate()
  const fetchUser = async () => {
    const response = await getOneUsers(id);
    setServicerData(response);
    setForm({email : response.email, name : response.name})
  };
  const {
    isLoading,
    isError,
  } = useQuery(["servicer", id], fetchUser);

  const [servicerData, setServicerData] = useState(null);
  const [form, setForm] = useState({
    email : "",
    name : ""
  })
  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await updateOneUser({id,form})
        
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
  return { id, isLoading, isError, servicerData, handleChange, form , handleSubmit};
}
