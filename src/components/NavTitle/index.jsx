import logoIMG from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
function NavTitle() {
  const navigate = useNavigate()
  const handleGotoDashboard = () => {
    navigate("/")
  }
  return (
    <header className="flex px-6 gap-2.5 items-center cursor-pointer" onClick={handleGotoDashboard}>
        <img src={logoIMG} alt="logo" className="w-[30px]" />
        <h1 className="text-xl font-extrabold">Dashboard</h1>
    </header>
  )
}

export default NavTitle