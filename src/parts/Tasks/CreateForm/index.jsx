import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";
import useCreateFormHooks from "./useCreateFormHooks";
import { Select, MenuItem } from "@mui/material";
import InputModalImage from "../../../components/InputModalImage";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingFullScreen from "../../../components/LoadingFullScreen";

function CreateForm(props) {
  const { handleOnChange, form,  handleAddData, isLoading, navigation } =
    useCreateFormHooks();

  return (
    <div className="md:mt-0 mt-14">
      <ToastContainer />
      {!isLoading ? (
        form && (
          <>
            
            <h4 className="text-center text-2xl font-bold mb-5">Buat Service an Baru</h4>
            <form className="flex flex-col gap-4 bg-[#ffffff] shadow-xl p-5 rounded-lg" onSubmit={handleAddData}>
              <div className="flex flex-col justify-center md:grid grid-cols-2 place-items-center w-full gap-4">
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.title}
                  name={"title"}
                  label={"Service"}
                  type={"text"}
                  required={true}
                  placeholder={"Service Laptop xyz windows rusak dll"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.deskripsi}
                  isMultiline
                  name={"deskripsi"}
                  label={"Deskripsi dan Kelengkapan"}
                  type={"text"}
                  required={true}
                  placeholder={"saat masuk blank hitam, kelengkapan : Cas & Tas"}
                />
                 <InputWithLabel
                  onChange={handleOnChange}
                  value={form.nama_barang}
                  name={"nama_barang"}
                  label={"Barang"}
                  type={"text"}
                  required={true}
                  placeholder={"Printer Epson L3120"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.nama_consumen}
                  name={"nama_consumen"}
                  label={"Nama Consumen"}
                  type={"text"}
                  required={true}
                  placeholder={"John Doe"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.no_telp_consumen}
                  name={"no_telp_consumen"}
                  label={"No Telp Consumen"}
                  type={"text"}
                  required={true}
                  placeholder={"0822682771"}
                />
              
              </div>
              
              <div className="flex justify-center mt-12">
                <button
                  type="submit"
                  className="bg-bluePrimary hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Add Product
                </button>
              </div>
              <div className="mt-4 flex justify-center">
              <button
                onClick={() => {navigation("/tasks")}}
                className="border-[1px] hover:border-black translate duration-300 px-4 py-2 text-sm md:text-base rounded-2xl font-bold"
              >
                Cancel
              </button>
            </div>
            </form>
            
          </>
        )
      ) : (
        <LoadingFullScreen isLoading={isLoading} />
      )}
    </div>
  );
}

export default CreateForm;
