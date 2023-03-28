import React from "react";
import Button from '@mui/material/Button';

function DelEditButton(props){

    const {isEdit,id, handleItemDelete ,handleItemEdit}=props

    return(
       
    !isEdit&&
    <div className="display__flex">
         <Button id="mg__right" size="small" onClick={()=>handleItemDelete(id)} variant="contained">Delete
        </Button>
        <Button size="small" onClick={()=>handleItemEdit(id)} variant="contained">Edit
        </Button>
    </div>
    
    
    )
    
}

export default DelEditButton;