import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function InputArea (props){
    const {handleChange , userName , isMatch}=props

    const signedInValidator =()=>{
        isMatch?alert("signed in"): alert("wrong name")
      }
    return(
        <div>
        <TextField  
        label="Write Your Name" variant="outlined" size="small"
        value={userName}
        onChange={handleChange}
        />
        <Button size="small" variant="contained" onClick={()=> signedInValidator()}>Sign In</Button>
        <div>
        <p>
            Don't have an account?
        </p>
       <Link to={"signup"}><Button size="small" variant="contained">Sign Up</Button></Link> 
        </div>
        </div>
    )
}

export default InputArea;