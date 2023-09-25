import {SearchRounded } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";


function Searchbar(props) {
  return (
    <TextField
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      id="outlined-basic"
      placeholder={props.placeholder}
      label={props.label}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Searchbar;
