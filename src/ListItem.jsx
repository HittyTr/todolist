import React from "react";
import DelEditButton from "./DelEditButton";

function ListItem(props){

    const {item,id, handleItemDelete ,handleItemEdit, isEdit }=props
    return (
        <>
        
        
        <li className="display__flex">
            <div className="text__area textalign__center">
            {item}
            </div>
            <DelEditButton
            isEdit={isEdit}
            handleItemEdit={handleItemEdit}
            handleItemDelete={handleItemDelete}
            id={id}
            />
            </li>
        
        
            </>
    )
}
export default ListItem;