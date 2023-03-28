import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link} from "react-router-dom";

function InputArea (props){
    const {handleChange , userName , isMatch, navigate}=props

    const signedInValidator =()=>{
        isMatch?navigate(`list/${userName}`): alert("Wrong Username")
      }
    return(
        <>
        <div className="signinup__area display__flex flex__directcolumn textalign__center">
            <div >
            <TextField  
            label="Write Your Name" variant="outlined" size="small"
            value={userName}
            onChange={handleChange}
            />
            </div>
            <div className="mg__top textalign__cente">
            <Button id="alignitemsrg" size="small" variant="contained" onClick={()=> signedInValidator()}>Sign In</Button>
            </div>
            <div className="display__flex justify__content__center">
                <p>
                Don't have an account? <Link to={"signup"}>Sign Up</Link>
                </p>
            </div>
        </div>
        </>
       
    )
}

export default InputArea;