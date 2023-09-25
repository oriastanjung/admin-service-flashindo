import { useEffect, useRef } from "react";
import { useState } from "react";
import { getOneTaskById } from "../../../api/services/tasks";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";

function useNotaHooks() {
  const componentRef = useRef();

  const navigation = useNavigate();
  const id = useParams().id;
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
  const urlQRPrefix = `${import.meta.env.VITE_APP_SERVICE_CLIENT_URL}/detail`;
  const today = moment(new Date().toISOString()).format("Do MMMM YYYY");
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchDataTask = async () => {
      const task = await getOneTaskById(id);
      setForm(task.data);
    };
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
    form,
    isLoading,
    today,
    urlQRPrefix,
    componentRef
  };
}

export default useNotaHooks;
