/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import ChevronRightSVG from "../../assets/icons/ChevronRightSVG"

function Card(props) {
  return (
    <div className="bg-white w-[100%] lg:w-[30%] md:w-[40%] px-5 py-5 rounded-3xl" style={{border : "1px solid #D9D9D9", boxShadow: "10px 15px 40px 1px rgba(81, 70, 159, 0.2)"}}>
        <div className="flex justify-between items-center">
            <h4 className="text-xl font-medium">{props.title}</h4>
            <div className="w-[24px]">
                {props.icon}
            </div>
        </div>
        <div>
            <p className="font-bold text-2xl mt-4">{props.value}</p>
            {/* <p className="font-normal text-sm mt-4 text-bluePrimary">View More <span className="font-bold"> {">"} </span></p> */}
            <Link className="font-normal text-sm mt-4 text-bluePrimary flex items-center hover:underline" to={props.href}>View More <ChevronRightSVG isActive/></Link>
        </div>
    </div>
  )
}

export default Card