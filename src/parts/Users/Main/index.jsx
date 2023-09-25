import { InfinitySpin } from "react-loader-spinner";
import Searchbar from "../../../components/Searchbar";
import TableUsers from "../../../components/TableUsers";
import useMainHooks from "./useMainHooks";
import InputSelect from "../../../components/InputSelect";
import "sweetalert2/src/sweetalert2.scss";
import Button from "../../../components/Button";

function Main() {
  const {
    allUsers,
    isLoading,
    columns,
    setSearchInput,
    searchInput,
    selectedStatus,
    setSelectedStatus,
    navigation
  } = useMainHooks();
  return (
    <div className="mt-16">
      <div className="flex justify-between w-full">
        <div className="flex justify-center md:justify-start w-full">
          <Searchbar
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            label={"Search"}
            placeholder={"Search by name or email"}
          />
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <InputSelect
            label={"Filter By Status"}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            options={[
              { value: "all", label: "All" },
              { value: true, label: "Active" },
              { value: false, label: "Disable" },
            ]}
          />
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end my-5">
        <Button onClick={() => navigation("/users/create")} isPrimary>Create Servicer Account</Button>
      </div>
      <div className="mt-10 h-1/2 overflow-hidden">
        {isLoading && (
          <div className="flex justify-center items-center flex-col text-center">
            <InfinitySpin width="200" color="#51469F" />
            <p>Loading ...</p>
          </div>
        )}
        {!isLoading && allUsers && (
          <TableUsers columns={columns} rows={allUsers} />
        )}
      </div>
    </div>
  );
}

export default Main;
