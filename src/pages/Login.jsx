import { useEffect, useState } from "react";
import { loginAdmin } from "../api/services/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigation = useNavigate()
  const [form, setForm] = useState({
    email : "",
    password : ""
  })
  const [token, setToken] = useState(Cookies.get("token")? JSON.parse(Cookies.get("token")) : "")
  const onChangeHandler = (e) =>{
    setForm({...form, [e.target.name] : e.target.value})
  }
  const handleLoginAdmin = async (e) => {
    e.preventDefault()
    try {

      const login = await loginAdmin(form)

      setToken(login.data)
    } catch (error) {
      alert("invalid credentials")
    }
  }


  useEffect(() => {
    if(token){
      Cookies.set("token", JSON.stringify(token))
      return navigation("/")
    }else{
      return;
    }
  },[token])

  return (
    <section className="flex flex-col pb-6 md:pb-0 md:flex-row h-screen bg-whiteSecondary items-center w-full gap-5">
      <div className="w-full md:w-1/2 h-full">
        <img
          className="h-full object-cover object-center"
          src="https://images.pexels.com/photos/1174122/pexels-photo-1174122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <form className="md:bg-slate-100 md:border-[1px] md:border-slate-300 md:px-52 md:rounded-3xl md:py-20 flex flex-col items-start " onSubmit={handleLoginAdmin}>
          <div className="flex justify-center w-full mb-10">
            <h1 className="font-bold text-2xl md:text-4xl">Login as Admin</h1>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <label className="text-base md:text-xl font-medium" htmlFor="">
              Email :{" "}
            </label>
            <input
              value={form.email}
              onChange={onChangeHandler}
              name="email"
              placeholder="example@gmail.com"
              className="border-[1px] border-bluePrimary bg-white  rounded-2xl px-4 py-2 w-full"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-full mt-10">
            <label className="text-base md:text-xl font-medium" htmlFor="">
              Password :{" "}
            </label>
            <input
              name="password"
              value={form.password}
              onChange={onChangeHandler}
              placeholder="*******"
              className="border-[1px] border-bluePrimary bg-white  rounded-2xl px-4 py-2 w-full"
              type="password"
              required
            />
          </div>
          <button type="submit" className="mt-10 w-full bg-bluePrimary px-4 py-2 rounded-2xl text-white font-bold text-base md:text-lg">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
