import HeaderDashboard from "../parts/Homepage/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import UpdateForm from "../parts/Users/UpdateForm";

function UsersUpdate() {
  

  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%] h-screen overflow-y-scroll   pt-6 px-10">
        <HeaderDashboard />
        <UpdateForm />
      </main>
    </section>
  );
}

export default UsersUpdate;
