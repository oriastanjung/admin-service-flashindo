import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

function InputSelect(props) {
  return (
    <FormControl>
      {/* <InputLabel id="demo-simple-select-label">{props.label}</InputLabel> */}
      <Select
        displayEmpty
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((item, i) => {
          return (
            <MenuItem key={i} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{props.label}</FormHelperText>
    </FormControl>
  );
}

export default InputSelect;
