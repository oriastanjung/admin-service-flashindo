import React, { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  DeleteForeverRounded,
  DriveFileRenameOutlineRounded,
} from "@mui/icons-material";
import {
  // changeStatusUser,
  deleteUser,
  getAllUsers,
} from "../../../api/services/users";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function useMainHooks() {
  const columns = [
    { id: "id", label: "ID", minWidth: 200 },
    { id: "name", label: "Name", minWidth: 200 },
    {
      id: "email",
      label: "Email",
      minWidth: 300,
      align: "left",
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];
  const [allUsers, setAllUsers] = useState("");
  const [filteredUsers, setFilteredUsers] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [selectedStatus, setSelectedStatus] = useState("all"); // Default to "Active"
  const navigation = useNavigate();

  const handleUpdateUser = async (id) => {
    navigation(`/users/update/${id}`);
  };

  const handleDeleteUser = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will delete this Servicer!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteUser(id);
        Swal.fire("Deleted!", "User deleted.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
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

  function createData(id, name, email) {
    const buttonsActions = [
      [
        <button
          onClick={() => handleUpdateUser(id)}
          className="p-2 rounded-full hover:bg-slate-200 mr-2"
        >
          <DriveFileRenameOutlineRounded />
        </button>,
        <button
          onClick={() => handleDeleteUser(id)}
          className="p-2 rounded-full hover:bg-red-200  mr-1"
        >
          <DeleteForeverRounded />
        </button>,
      ],
    ];

    return {
      id,
      name,
      email,
      action: buttonsActions,
    };
  }

  useEffect(() => {
    const fetchAllUsers = async () => {
      const AllUsers = await getAllUsers();

      const rows1 = AllUsers.data
        .filter((item) => item._id !== "6510fbf8e8700022e8e6b04f")
        .map((item) => createData(item._id, item.name, item.email));
        
      setAllUsers(rows1);
      setFilteredUsers(rows1); // Initialize filteredUsers with all users
    };

    fetchAllUsers();
    const delay = 1500; // 1 second delay

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  useEffect(() => {
    // Perform filtering based on searchInput and selectedStatus
    const filtered = [...allUsers].filter(
      (user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchInput, allUsers, selectedStatus]);

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
  useEffect(() => {
    if (!token) {
      return navigation("/login");
    } else {
      return;
    }
  }, [token]);
  return {
    allUsers: filteredUsers,
    columns,
    searchInput,
    setSearchInput,
    isLoading,
    selectedStatus,
    setSelectedStatus,
    navigation,
  };
}

export default useMainHooks;
