import NavLink from "../NavLink";
import NavTitle from "../NavTitle";
import DashboardIcon from "../../assets/icons/DashboardSVG";
import UsersIcon from "../../assets/icons/UsersSVG";
import ItemsIcon from "../../assets/icons/ItemsSVG";
import TransactionsIcon from "../../assets/icons/TransactionsSVG";

import { useLocation } from "react-router-dom";
import {
  CategoryRounded,
  CloseRounded,
  MenuRounded,
} from "@mui/icons-material";
import { useState } from "react";

function Sidebar() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const urlPathActive = location.pathname.slice(1);
  const checkIsActive = (urlCheck) => {
    if (urlPathActive === urlCheck) {
      return true;
    }
  };
  return (
    <>
      <aside className="bg-[#ffffff] border-e-[1px] border-greyPrimary xl:w-[20%] lg:w-[30%]  pt-6 h-screen hidden lg:block">
        <NavTitle />
        <ul className={"mt-20 flex flex-col"}>
          <li>
            <NavLink
              active={checkIsActive("")}
              title={"Main Menu"}
              href={"/"}
              icon={<DashboardIcon active={checkIsActive("")} />}
            />
          </li>
          <li>
            <NavLink
              active={checkIsActive("users")}
              title={"Servicer Management"}
              icon={<UsersIcon active={checkIsActive("users")} />}
              href={"/users"}
            />
          </li>
          <li>
            <NavLink
              active={checkIsActive("tasks")}
              title={"Tasks"}
              href={"/tasks"}
              icon={<ItemsIcon active={checkIsActive("tasks")} />}
            />
          </li>
          {/* <li>
            <NavLink
              active={checkIsActive("categories")}
              title={"Category"}
              href={"/categories"}
              icon={<CategoryRounded active={checkIsActive("categories")} />}
            />
          </li>
          <li>
            <NavLink
              active={checkIsActive("transactions")}
              title={"Transactions"}
              href={"/transactions"}
              icon={<TransactionsIcon active={checkIsActive("transactions")} />}
            />
          </li> */}
        </ul>
      </aside>
      <div
        onClick={() => setShow(true)}
        className=" md:hidden flex absolute top-5 right-3 justify-end p-2 rounded-full bg-white"
      >
        {!show && <MenuRounded />}
      </div>
      {show && (
        <div className="flex fixed top-0 z-[100] w-full bg-black bg-opacity-50 h-screen  lg:hidden">
          <aside className="w-[80%] h-screen bg-[#ffffff] border-e-[1px] border-greyPrimary xl:w-[20%]  pt-6 ">
            <nav className="flex w-full items-center justify-between">
              <NavTitle />
            </nav>
            <ul className={"mt-20 flex flex-col"}>
              <li>
                <NavLink
                  active={checkIsActive("")}
                  title={"Dashboard"}
                  href={"/"}
                  icon={<DashboardIcon active={checkIsActive("")} />}
                />
              </li>
              <li>
                <NavLink
                  active={checkIsActive("users")}
                  title={"Servicer Management"}
                  icon={<UsersIcon active={checkIsActive("users")} />}
                  href={"/users"}
                />
              </li>
              <li>
                <NavLink
                  active={checkIsActive("tasks")}
                  title={"Tasks"}
                  href={"/tasks"}
                  icon={<ItemsIcon active={checkIsActive("tasks")} />}
                />
              </li>
              
            </ul>
          </aside>
          <button
            onClick={() => setShow(false)}
            className="h-12 flex justify-center items-center w-12 relative top-5 -right-2  p-2 rounded-full bg-white"
          >
            <CloseRounded />
          </button>
        </div>
      )}
    </>
  );
}

export default Sidebar;
