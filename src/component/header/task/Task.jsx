import React from 'react'
import './Task.css'
import { FaBars } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
function Task() {
  return (
    <div className='header'>
        <div className='header-content'>
         <FaBars size={30} color="black" />
    
        <h1>Todo-list-App</h1>
        <FaSearch size={30} color="black" />
        </div>
        <div className='enter-task'>
        <input type="text" placeholder='Enter your task' />
        <button className='add-btn'>Add-Task</button>

        </div>
    </div>
  )
}

export default Task