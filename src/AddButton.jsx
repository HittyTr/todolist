import React from "react";
import Button from '@mui/material/Button';

function AddButton (props){
    const {handleAddButton, userListItem, isEdit, handleSaveButton }=props

    return(
        isEdit?
        <Button size="small" onClick={()=> handleSaveButton(userListItem)} variant="contained">Save</Button>
        :
        <Button size="small" onClick={()=> handleAddButton(userListItem)} variant="contained">Add</Button>
       
    )
}
export default AddButton;