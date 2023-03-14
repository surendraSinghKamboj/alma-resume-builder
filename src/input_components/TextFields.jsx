import { FormControl, TextField } from "@mui/material"
// import { Controller } from "react-hook-form";
// import { addErrorIntoField } from "../utils/MiscUtilities";
// import ErrorMessage from "../utils/ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
     
          <TextField name={name} required label={label} variant="outlined" InputProps={inputProps} />
       
     

    </FormControl>
  )
}

export default TextFields