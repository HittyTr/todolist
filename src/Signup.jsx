import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link} from "react-router-dom";

function Signup(props){
const {handleChange , userName, isMatch, navigate, register}=props



  const signedUpValidator =()=>{
    let correctUserName=(userName.trim()!=="")
    console.log(correctUserName)
    if(!isMatch&&correctUserName){
        register()
        navigate(`list/${userName}`)
    }
    else {alert("This username isn't available. Try Another")}
  }

    return(
        <>
        <div className="signinup__area display__flex flex__directcolumn textalign__center">
            <div>
                <TextField  
                label="Write Your Name" 
                variant="outlined" 
                size="small"
                value={userName}
                onChange={handleChange}
                />
            </div>
            <div className="mg__top textalign__center">
                <Button size="small" 
                variant="contained" 
                onClick={()=>signedUpValidator()}>Register</Button>
            </div>
            <div className="display__flex justify__content__center">
                <p>Do you have account? <Link to={"/"}>Sign in</Link></p>
            </div>
        </div>
        </>
    )
}

export default Signup;