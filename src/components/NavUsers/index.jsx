import { useState } from "react";
import testUserIcon from "../../assets/test-user.png";
import chevrownDownIcon from "../../assets/chevrown-down.png";
import { logout } from "../../api/services/auth";
import { useNavigate } from "react-router-dom";

function NavUsers(props) {
  const navigation = useNavigate()
  const [pressed, setPressed] = useState(false);
  const showModal = () => {
    setPressed(!pressed);
  };
  const logoutHandler = async () =>{

    const data = await logout()
    navigation("/")
  }
  return (
    <>
      <div
        className="flex items-center relative top-0 gap-5 cursor-pointer"
        onClick={showModal}
      >
        <p className="font-medium text-base">Admin</p>
        <div className="relative top-0 flex items-center gap-2.5">
          <div
            className="w-[50px] rounded-[12px]"
            style={{ boxShadow: "0px 4px 9px 1px rgba(0, 0, 0, 0.5)" }}
          >
            <img src={testUserIcon} alt="profile" />
          </div>
          <div>
            <img src={chevrownDownIcon} alt="" />
          </div>
        </div>
        {pressed && (
          <div className="flex flex-col items-center justify-center text-center bg-white absolute top-10 w-full z-10 md:right-[10%] lg:right-[3%] border-greyPrimary border-[1px] rounded-[12px]">
            {/* <p className="hover:bg-slate-300 w-full p-2 ">Account Preferences</p> */}
            <p onClick={logoutHandler} className="hover:bg-slate-300 w-full p-2 ">Sign Out</p>
          </div>
        )}
      </div>
    </>
  );
}

export default NavUsers;
