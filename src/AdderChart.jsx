import React from "react";
import AddButton from "./AddButton";
import TextField from '@mui/material/TextField';

function AdderChart(props){
    const {setUserInput, 
           userListItem,
           handleAddButton,
           isEdit, 
           handleSaveButton }=props

    return (
        <>  
        <div>
        <TextField onChange={setUserInput}
            value={userListItem.content}
            name="content"
            id="outlined-basic" 
            label="Write something to do" 
            variant="outlined" 
            size="small"
        />
       
        </div>
        <div className="mg__top">
            <AddButton
            handleAddButton={handleAddButton}
            userListItem={userListItem}
            isEdit={isEdit}
            handleSaveButton={handleSaveButton}
        />
        </div>
   
        </>
      
        
    )
}
export default AdderChart;