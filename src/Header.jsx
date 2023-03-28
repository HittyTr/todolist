import React from 'react';
function Header(props) {

    const {userName}=props
    return (
        <div className='textalign__center header'>
            <p> {userName}'s To Do List </p>
        </div>
      
    )
}
export default Header