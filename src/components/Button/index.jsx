import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.isPrimary && "bg-bluePrimary text-white"} px-5 py-2 rounded-lg `}
    >
      {props.children}
    </button>
  );
}
