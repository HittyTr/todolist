import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function Signup(props){
const {handleChange , userName, isMatch, navigate}=props



  const signedUpValidator =()=>{
    !isMatch?alert("signed in"): alert("wrong name")
  }

    return(
        <>
        <div>
            <TextField  
        label="Write Your Name" variant="outlined" size="small"
        value={userName}
        onChange={handleChange}
        />
        </div>
        <div>
            <Button size="small" variant="contained" onClick={()=>signedUpValidator()}>Register</Button>
        </div>
        <div>
            <p>Do you have account?</p> 
            <Button size="small" variant="contained" onClick={()=>navigate(-1)}>Go back to Sign In</Button>
        </div>
        </>
    )
}

export default Signup;