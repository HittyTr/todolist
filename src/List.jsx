import React from "react";
import ListItem from "./ListItem";
function List(props){

const {userList, handleItemDelete, handleItemEdit, isEdit}=props

return(
<> 
{userList && userList.map((item, index)=> {

return ( 
    <ul>
    <ListItem
    item={item.content}
    key={index}
    id={item.id}
    handleItemDelete={handleItemDelete}
    handleItemEdit ={handleItemEdit}
    isEdit={isEdit}
    />
    </ul>
)})}
    </>
)}
export default List;