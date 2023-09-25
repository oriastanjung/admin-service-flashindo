import React from "react";
import useCreateFormHooks from "./useCreateFormHooks";
import { ToastContainer } from "react-toastify";
import InputWithLabel from "../../../components/InputWithLabel";
export default function UpdateForm() {
  const { form, handleChange, handleSubmit } = useCreateFormHooks();
  return (
    <main className="container mx-auto px-5 mt-24">
      <ToastContainer />

      <>
        <h3 className="font-medium text-lg my-8 text-center w-full">
          Create Servicer Account :{" "}
        </h3>

        <form
          className="w-full bg-[#ffffff] shadow-md rounded-lg p-8  flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="w-full grid md:grid-cols-2 place-content-center justify-between items-start gap-16">
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
            <InputWithLabel
              name="password"
              type="password"
              onChange={handleChange}
              value={form.password}
              label={"Password"}
              required={true}
            />
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <button
              className="bg-bluePrimary text-white px-5 py-2 rounded-xl"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </>
    </main>
  );
}
