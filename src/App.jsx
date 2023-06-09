import { useState, useEffect } from 'react';
import './App.css';
import InputArea from './InputArea';
import Signup from './Signup';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TodoApp from './TodoApp'


function App() {

  const [userName,setuserName]=useState("")
  const [isMatch, setIsMatch]=useState(false)
  const navigate= useNavigate()


  function handleChange(e,x){
    e.preventDefault()
    setuserName(e.target.value);
  }

  useEffect(()=>{
    const validateUser = async (x) => {
      const response = await fetch(
        'https://6319cdc76b4c78d91b43ede0.mockapi.io/loginlist',
        {headers: {
        'Content-type': './application/json; charset=UTF-8',
        'Accept': 'application/json'
        }
        }
      );
      const data = await response.json();
      const validation= data.filter(item =>{
      return x.trim()===item.userName
      }) 

    setIsMatch(validation.length!==0)
    }
    validateUser(userName)}
  ,[userName])

 
const register=async () => {
  let response = await fetch('https://6319cdc76b4c78d91b43ede0.mockapi.io/loginlist', {
     method: 'POST',
     body: JSON.stringify({
        userName: userName,
        List:[]
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  });
};




  return (
    <Routes>
    <Route path="/" element={ <InputArea handleChange={handleChange} userName={userName}  navigate={navigate} isMatch={isMatch}/>} />
    <Route path="signup" element={<Signup handleChange={handleChange} userName={userName} navigate={navigate}  isMatch={isMatch} register={register} />} />
    <Route path= {`list/${userName}`} element={<TodoApp userName={userName}/>}/>
    </Routes>
  );
}

export default App;
