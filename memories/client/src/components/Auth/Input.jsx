import React from 'react';
import { TextField,Grid,InputAdornment,IconButton } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Input = ({name,half,handleChange,label,autoFocus,type,handleShowPassword}) => {
  return (
    <Grid container xs={12} sm={half ? 6 : 12}>
        <TextField style={{margin:'5px'}}
            name={name}
            onChange={handleChange}
            varient="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name=== 'password' ? {
                endAdornment:(                
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type === "password" ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            ),
            }: null}
        />
    </Grid>
  );
}

export default Input