
function InputModalImage(props) {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-6">
      <label className="font-bold text-base md:text-lg">{props.label}</label>
      {props.imageUrl ? (
        <img
          className="w-[10rem] border-[1px] object-center object-cover"
          src={props.imageUrl}
          alt="imageUrl"
        />
      ) : (
        <p className="text-sm md:text-base">Upload Your {props.label}</p>
      )}
      {!props.disabled && (
        <input
          required={props.required}
          className="text-center pl-12 md:pl-0 text-xs md:text-base"
          type="file"
          name={props.name}
          onChange={props.onChange}
        />
      )}
    </div>
  );
}

export default InputModalImage;
