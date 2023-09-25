import { useEffect, useState } from "react";
// import { getAllProducts } from "../../../api/services/tasks";
import { getAllUsers } from "../../../api/services/users";
import { getAllTasks } from "../../../api/services/tasks";

function useMainHooks() {

  const [totalTasks, setTotalTasks] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBenefit, setTotalBenefit] = useState(0);

  useEffect(() => {
    const fetchAllTasks = async () => {
      const result = await getAllTasks();
      setTotalTasks(result.data.length);
    };
    const fetchAllUsers = async () => {
      const result = await getAllUsers();
      setTotalUsers(result.data.length);
    };

    fetchAllTasks();
    fetchAllUsers();
    
  }, []);
  return {
    totalTasks,
    totalUsers,
    totalBenefit,
  };
}

export default useMainHooks;
