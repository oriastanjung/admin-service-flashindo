import { InfinitySpin } from "react-loader-spinner";
import Searchbar from "../../../components/Searchbar";
import TableProducts from "../../../components/TableProducts";
import useMainHooks from "./useMainHooks";
import InputSelect from "../../../components/InputSelect";
import "sweetalert2/src/sweetalert2.scss";

function Main() {
  const {
    allTasks,
    columns,
    setSearchInput,
    searchInput,
    selectedCategory,
    setSelectedCategory,
    allCategory,
    navigation,
    fetchingLoading,
  } = useMainHooks();
  return (
    <>
      <div className="mt-16">
        <div className="flex justify-between w-full">
          <div className="flex justify-center md:justify-start w-full">
            <Searchbar
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              label={"Search"}
              placeholder={"Search by name or description"}
            />
          </div>

          <div className="flex justify-center md:justify-end w-full">
            {allCategory && (
              <InputSelect
                label={"Filter By Category"}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={allCategory}
              />
            )}
          </div>
        </div>
        <div className="w-full flex justify-end mt-5 ">
          <button
            onClick={() => {navigation("/tasks/create")}}
            className="md:px-4 px-3 py-2 md:py-2 rounded-2xl bg-success text-white text-sm md:text-base font-bold"
          >
            Buat Service Baru
          </button>
        </div>
        <div className="mt-10 h-1/2 overflow-hidden">
          {fetchingLoading && (
            <div className="flex justify-center items-center flex-col text-center">
              <InfinitySpin width="200" color="#51469F" />
              <p>Loading ...</p>
            </div>
          )}
          {!fetchingLoading && allTasks && (
            <TableProducts columns={columns} rows={allTasks} />
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
