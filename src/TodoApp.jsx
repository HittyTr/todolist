import React, { useState, useEffect } from 'react';
import AdderChart from './AdderChart';
import ClearButton from './ClearButton';
import Header from './Header';
import List from './List';
import SaveButton from './SaveButton'
import './App.css';
function TodoApp(props) {
    const {userName}=props
    const [userID,setUserID]= useState("")
    const [userList,setUserList]=useState([])
    const [userListItem, setUserListItem]=useState ({
        content:"",
        id:0,
        status: false
    })
    const [isEdit, setIsEdit]=useState(false)
    
    const handleInput= (e)=>{
        e.preventDefault()
        const { name, value } = e.target;
        setUserListItem((preV) => {
          return { ...preV, [name]: value };
        });
      }
    
    const handleAddButton=()=>{
        
        const newItem={content:userListItem.content,id:userListItem.id, status:userListItem.status}
        userList?setUserList((prevObj) => {
            return [...prevObj, newItem];
          }): setUserList([newItem]);
          setUserListItem({
            content:"",
            id:userListItem.id+1,
            status: false
        })
          }
        
    const handleItemDelete=(x)=>{
        setUserList(
          userList.filter(item => {
              return item.id !== x}))
    }

    const handleClearButton = ()=> {
        setUserList([])
    }

    const handleItemEdit= (x)=>{
        setIsEdit(true)
        setUserListItem(
            userList.find(item => {
                return item.id === x}
        ))
        
    }
    const handleSaveButton=(x)=>{

        setIsEdit(false)
        const cacheUserlist=[...userList]
        const cacheEditingItemNo= cacheUserlist.findIndex(item => {
            return item.id === x.id})
        cacheUserlist[cacheEditingItemNo]= userListItem
        setUserListItem({
            content:"",
            id:userListItem.id+1,
            status: false
        })
        setUserList(cacheUserlist)

    }   

    /* API */
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
               'https://6319cdc76b4c78d91b43ede0.mockapi.io/loginlist',
               { headers: {
                'Content-type': './application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
            }
            );
            const data = await response.json();
            
            const filteredData=data.filter(item =>{
                return userName===item.userName
                })
            setUserList(filteredData[0].List)  //daha iyi yapilabilinir filter kullan  
            setUserID(filteredData[0].id)  
    }
    fetchPost()}
    ,[])

     async function updatePost(id) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                List: userList 
            })
        };
        const response = await fetch(`https://6319cdc76b4c78d91b43ede0.mockapi.io/loginlist/${id}`, requestOptions);
     }
  return (
 <>
    <Header
    userName={userName}
    />
    <div className='textalign__center'>
    <AdderChart
    userListItem={userListItem}
    setUserInput={handleInput}
    handleAddButton={handleAddButton}
    handleSaveButton={handleSaveButton}
    isEdit={isEdit}
    />
    </div>
    
    <div className='textalign__center main__list'>
    <List
    userList={userList}
    handleItemDelete={handleItemDelete}
    handleItemEdit={handleItemEdit}
    isEdit={isEdit}
    />
    <div className=' justify__content__center display__flex mg__top' >
        <div className='mg__right1'>
        <ClearButton
        handleClearButton={handleClearButton}
        />
    </div>
    <SaveButton
    userID={userID}
    updatePost={updatePost}
    />
    </div>

    </div>
   
 </>
    
   
   
  )
  }

export default TodoApp;
