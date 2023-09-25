import React, { useEffect, useState } from "react";
import {
  DeleteForeverRounded,
  DriveFileRenameOutlineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { deleteTaskById, getAllTasks } from "../../../api/services/tasks";
// import { getAllCategories } from "../../../api/services/categories";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

function useMainHooks() {
  const [idProduct, setIdProduct] = useState("");
  
  const columns = [
    { id: "no", label: "No.", minWidth: 50 },
    { id: "title", label: "Title", minWidth: 150 },
    { id: "kode_task", label: "Kode Service", minWidth: 150 },
    { id: "nama_barang", label: "Barang", minWidth: 150 },
    {
      id: "deskripsi",
      label: "Description",
      minWidth: 100,
      align: "left",
    },
    {
      id: "nama_consumen",
      label: "Nama Consumen",
      minWidth: 120,
      align: "left",
    },
    {
      id: "no_telp_consumen",
      label: "No Telp Consumen",
      minWidth: 120,
      align: "left",
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
      align: "center",
    },
    {
      id: "servicer",
      label: "Servicer",
      minWidth: 150,
      align: "left",
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];

  const [allTasks, setAllTasks] = useState("");
  const [filteredProducts, setFilteredProducts] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "onprogress", label: "Onprogress" },
    { value: "finish", label: "Finish" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "Active"
  const navigation = useNavigate();

  const handleDeleteProduct = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will delete this Service!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#51469F",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteTaskById(id);

        Swal.fire("Deleted!", "Service Deleted.", "success");
        
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! CODE : ${error}`,
      });
      console.error("Error: ", error);
    }
  };

  function createData(
    id,
    no,
    title,
    kode_task,
    nama_barang,
    deskripsi,
    nama_consumen,
    no_telp_consumen,
    status,
    servicer
  ) {
    const buttonsActions = [
      [
        <button
          key={0}
          onClick={() => navigation(`/tasks/update/${id}`)}
          className="p-2 rounded-full hover:bg-slate-200 mr-2"
        >
          <DriveFileRenameOutlineRounded />
        </button>,
        <button
          key={1}
          onClick={() => handleDeleteProduct(id)}
          className="p-2 rounded-full hover:bg-red-200  mr-1"
        >
          <DeleteForeverRounded />
        </button>,
      ],
    ];

    return {
      no,
      title,
      kode_task,
      nama_barang,
      deskripsi,
      nama_consumen,
      no_telp_consumen,
      status,
      servicer,
      action: buttonsActions,
    };
  }

  const fetchAllTasks = async () => {
    const AllTasks = await getAllTasks();

    const rows1 = AllTasks.data.map((item, i) =>
      createData(
        item._id,
        i + 1,
        item.title,
        item.kode_task,
        item.nama_barang,
        item.deskripsi,
        item.nama_consumen,
        item.no_telp_consumen,
        item.status,
        item.id_servicer?.name
      )
    );

    setAllTasks(rows1);
    setFilteredProducts(rows1); // Initialize filteredProducts with all users
  };

  const { isLoading: fetchingLoading } = useQuery(["tasks"], fetchAllTasks, {
    staleTime: 500,
    refetchInterval: 2000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    // Perform filtering based on searchInput and selectedCategory
    const filtered = [...allTasks].filter(
      (tasks) =>
        (tasks.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          tasks.deskripsi.toLowerCase().includes(searchInput.toLowerCase()) ||
          tasks.nama_consumen
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          tasks.kode_task.toLowerCase().includes(searchInput.toLowerCase()) ||
          tasks.no_telp_consumen
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          tasks.nama_barang.toLowerCase().includes(searchInput.toLowerCase()) ) &&
        (selectedCategory === "all" || tasks.status === selectedCategory)
    );
    setFilteredProducts(filtered);
  }, [searchInput, allTasks, selectedCategory]);

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
  useEffect(() => {
    if (!token) {
      return navigation("/login");
    } else {
      return;
    }
  }, [token]);
  return {
    allTasks: filteredProducts,
    columns,
    searchInput,
    setSearchInput,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    allCategory,
    idProduct,
    fetchingLoading,
    navigation
  };
}

export default useMainHooks;
