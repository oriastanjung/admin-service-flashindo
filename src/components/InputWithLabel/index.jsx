import { FormControl, FormLabel, Input } from "@mui/material";

function InputWithLabel(props) {
  return (
    <div
      className={`flex flex-col items-start justify-start ${
        props.isMultiline && "-ml-8"
      }`}
    >
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Input
          disabled={props.disabled}
          multiline={props.isMultiline}
          maxRows={2}
          name={props.name}
          className={` px-2 py-1 w-full `}
          placeholder={props.placeholder}
          type={props.type}
          required={props.required}
          value={props.value}
          onChange={props.onChange}
        />
      </FormControl>
    </div>
  );
}

export default InputWithLabel;
