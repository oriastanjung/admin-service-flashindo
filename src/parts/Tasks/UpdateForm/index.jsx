import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";
import useUpdateFormHooks from "./useUpdateFormHooks";
import { Select, MenuItem } from "@mui/material";
import InputModalImage from "../../../components/InputModalImage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingFullScreen from "../../../components/LoadingFullScreen";
import { Link } from "react-router-dom";

function UpdateForm(props) {
  const {
    handleOnChange,
    form,
    allStatus,
    allStatusTask,
    allServicer,
    handleUpdateData,
    handleUpdatePriceData,
    handleUpdateImageData,
    isLoading,
    id,
  } = useUpdateFormHooks();

  return (
    <div>
      <ToastContainer />
      {!isLoading ? (
        form && (
          <>
            <h4 className="text-center text-2xl font-bold">Update Service</h4>
            <div className="w-full flex items-center justify-center mt-5">
              <Link
                target="_blank"
                to={`/tasks/nota/${id}`}
                className="text-center text-black underline hover:text-bluePrimary font-semibold hover:font-bold"
              >
                Print Nota
              </Link>
            </div>
            <form
              className="flex flex-col gap-4 bg-[#ffffff] border-[1px] border-gray-300 md:mt-12 mt-6 rounded-lg md:p-10"
              onSubmit={handleUpdateData}
            >
              <div className="flex flex-col justify-start md:grid grid-cols-2 place-items-center w-full gap-4">
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.title}
                  name={"title"}
                  label={"Service :"}
                  type={"text"}
                  placeholder={"Service laptop asus x441ba ga masuk windows"}
                  disabled={true}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.deskripsi}
                  isMultiline
                  name={"deskripsi"}
                  label={"Deskripsi dan Kelengkapan"}
                  type={"text"}
                  placeholder={"laptop kayak matot, kelengkapan : CAS & TAS"}
                  disabled={true}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.kode_task}
                  name={"kode_task"}
                  label={"Kode Task"}
                  type={"text"}
                  disabled={true}
                  placeholder={"*******"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.nama_barang}
                  name={"nama_barang"}
                  label={"Barang"}
                  type={"text"}
                  placeholder={"ASUS X441BA"}
                  disabled={true}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.nama_consumen}
                  name={"nama_consumen"}
                  label={"Nama Consumen"}
                  type={"text"}
                  placeholder={"John Doe"}
                  disabled={true}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.no_telp_consumen}
                  name={"no_telp_consumen"}
                  label={"No Telp Consumen"}
                  type={"text"}
                  placeholder={"0822626628"}
                  disabled={true}
                />
                <div className="flex flex-col justify-start w-full md:w-auto px-8 gap-3">
                  <label>Status</label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status"
                    onChange={handleOnChange}
                    value={form.status}
                    placeholder=""
                  >
                    {allStatus &&
                      allStatus.map((item, i) => {
                        return (
                          <MenuItem
                            key={i}
                            className="capitalize"
                            value={item.value}
                          >
                            {item.label}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                <div className="flex flex-col justify-start w-full md:w-auto px-8 gap-3">
                  <label>Status Task</label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status_task"
                    onChange={handleOnChange}
                    value={form.status_task}
                    placeholder=""
                  >
                    {allStatusTask &&
                      allStatusTask.map((item, i) => {
                        return (
                          <MenuItem
                            key={i}
                            className="capitalize"
                            value={item.value}
                          >
                            {item.label}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                <div className="flex flex-col justify-center  w-full md:w-auto px-8 gap-3">
                  <label>Servicer</label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="id_servicer"
                    onChange={handleOnChange}
                    value={form.id_servicer ? form.id_servicer._id : ""}
                    placeholder=""
                  >
                    {allServicer &&
                      allServicer.map((item, i) => {
                        return (
                          <MenuItem
                            key={i}
                            className="capitalize"
                            value={item._id}
                          >
                            {item.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.komentar_service}
                  isMultiline
                  name={"komentar_service"}
                  label={"Komentar dari Servicer"}
                  type={"text"}
                  placeholder={"Sedang dicek laptopnya"}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-bluePrimary mt-10 hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Update Data
                </button>
              </div>
            </form>

            <form
              className="flex flex-col gap-4 bg-[#ffffff] border-[1px] border-gray-300 md:mt-12 mt-6 rounded-lg md:p-10"
              onSubmit={handleUpdatePriceData}
            >
              <div className="flex flex-col justify-start md:grid grid-cols-2 place-items-center w-full gap-4">
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.modal_service}
                  name={"modal_service"}
                  label={"Modal Service :"}
                  type={"number"}
                  placeholder={"20000"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.harga_service}
                  name={"harga_service"}
                  label={"Harga Service :"}
                  type={"number"}
                  placeholder={"80000"}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-bluePrimary mt-10 hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Update Data
                </button>
              </div>
            </form>

            <form
              className="flex flex-col gap-4 bg-[#ffffff] border-[1px] border-gray-300  md:mt-12 mt-6 rounded-lg md:p-10"
              onSubmit={handleUpdateImageData}
            >
              <div className="flex flex-col border-t-2 mt-8 pt-8 gap-5 border-slate-300 w-full">
                <InputModalImage
                  onChange={handleOnChange}
                  name={"gambar_service"}
                  label={"Gambar Progress Service"}
                  imageUrl={form.gambar_service_URL}
                />
                <hr />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-bluePrimary mt-10 hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Update Data
                </button>
              </div>
            </form>

            <div className="mt-4 mb-12 flex justify-center">
              <button
                onClick={props.onClose}
                className="border-[1px] text-sm md:text-base hover:border-black translate duration-300 px-4 py-2 rounded-2xl font-bold"
              >
                Cancel
              </button>
            </div>
          </>
        )
      ) : (
        <LoadingFullScreen isLoading={isLoading} />
      )}
    </div>
  );
}

export default UpdateForm;
