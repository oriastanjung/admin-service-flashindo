import HeaderDashboard from "../parts/Homepage/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import Main from "../parts/Users/Main";

function Users() {
  

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

export default Users;
