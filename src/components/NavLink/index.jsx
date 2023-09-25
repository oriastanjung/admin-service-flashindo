/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link
      to={props.href}
      className={`py-5 px-6 ${props.active ? " text-bluePrimary font-bold" : "font-medium"} flex items-center gap-1 hover:bg-gray-100`}
    >
      {" "}
      {/* <img src={props.icon} alt="icon" /> {props.title} */}
      {props.icon} {props.title}
    </Link>
  );
}

export default NavLink;
