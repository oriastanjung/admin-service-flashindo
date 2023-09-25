import NavUsers from "../../../components/NavUsers";

function HeaderDashboard() {
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-extrabold text-2xl text-center">Welcome to Dashboard</h2>
        <p className="font-regular text-xl text-center">Hello Admin, welcome back!</p>
      </div>
      <div className="hidden md:block">
        <NavUsers />
      </div>
    </div>
  );
}

export default HeaderDashboard;
