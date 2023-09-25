import HeaderDashboard from "../parts/Homepage/HeaderDashboard";
import Sidebar from "../components/Sidebar";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Main from "../parts/Homepage/Main";


function Homepage() {
  const navigation = useNavigate();

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
  useEffect(() => {
    if (!token) {
      return navigation("/login");
    } else {
      return;
    }
  }, [token]);
  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%] h-screen overflow-y-scroll   pt-6 px-10">
        <HeaderDashboard />
        <Main />
      </main>
    </section>
  );
}

export default Homepage;
