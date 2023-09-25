import React from "react";
import useResetPasswordFormHooks from "./useResetPasswordFormHooks";
import { ToastContainer } from "react-toastify";
import InputWithLabel from "../../../components/InputWithLabel";
export default function ResetPasswordForm() {
  const { form, handleChange, handleSubmit } = useResetPasswordFormHooks();
  return (
    <main className="container mx-auto px-5 mt-24">
      <ToastContainer />

      <>
        <h3 className="font-medium text-lg my-8 text-center w-full">
          Reset Servicer Account :{" "}
        </h3>

        <form
          className="w-full bg-[#ffffff] shadow-md rounded-lg p-8  flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="w-full grid place-content-center justify-center items-start gap-16">
            {" "}
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
              Update
            </button>
          </div>
        </form>
      </>
    </main>
  );
}
