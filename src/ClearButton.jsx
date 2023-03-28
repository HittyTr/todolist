import React from "react";
import Button from '@mui/material/Button';

function ClearButton(props){

    const{handleClearButton}=props
    return (
        <div> 
        <Button size="small" onClick={handleClearButton} variant="contained">Clear
        </Button>
        </div>
    )
}
export default ClearButton;