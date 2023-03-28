import React from "react";
import Button from '@mui/material/Button';

function SaveButton(props){
    const{userID , updatePost}=props

    return (

        <Button onClick={()=>updatePost(userID)} size="small" variant="contained">Save to Cloud
        </Button>
    )
}
export default SaveButton;