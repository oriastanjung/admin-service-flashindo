import React from "react";
import useUpdateFormHooks from "./useUpdateFormHooks";
import { ToastContainer } from "react-toastify";
import InputWithLabel from "../../../components/InputWithLabel";
import { Link } from "react-router-dom";
export default function UpdateForm() {
  const { id,servicerData, isLoading, isError, form, handleChange, handleSubmit } =
    useUpdateFormHooks();
  return (
    <main className="container mx-auto px-5 mt-24">
      <ToastContainer />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="font-medium text-lg my-8 text-center w-full">Update Servicer Account : </h3>
          {servicerData && (
            <form
              className="w-full bg-[#ffffff] shadow-md rounded-lg p-8  flex flex-col"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                {" "}
                <InputWithLabel
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={form.email}
                  label={"Email"}
                  required={true}
                />
                <InputWithLabel
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={form.name}
                  label={"Servicer Name"}
                  required={true}
                />
              </div>
              <div className="mt-16 w-full flex justify-center">
                <Link to={`/users/reset-password/${id}`} className="underline hover:text-bluePrimary font-bold">
                  Reset Password {">"}
                </Link>
              </div>
              <div className="w-full flex justify-center items-center mt-8">
                <button
                  className="bg-bluePrimary text-white px-5 py-2 rounded-xl"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </main>
  );
}
