import React, { useState } from 'react';
import './Task.css';
import { FaBars } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

function Task() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() === '') return;
        
        if (editIndex !== null) {
            // Edit existing task
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = inputValue;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            // Add new task
            setTasks([...tasks, inputValue]);
        }
        setInputValue('');
    };

    const handleDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        if (editIndex === index) {
            setEditIndex(null);
            setInputValue('');
        }
    };

    const handleEdit = (index) => {
        setInputValue(tasks[index]);
        setEditIndex(index);
    };

    const handleCompleted = (index) => {
        // You can implement completed functionality here
        console.log('Task completed:', tasks[index]);
    };

    return (
        <div className='header'>
            <div className='header-content'>
                <FaBars size={30} color="black" />
                <h1>Todo-list-App</h1>
                <FaSearch size={30} color="black" />
            </div>
            
            <div className='enter-task'>
                <input 
                    type="text" 
                    placeholder='Enter your task' 
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className='add-btn' onClick={handleAddTask}>
                    {editIndex !== null ? 'Update Task' : 'Add Task'}
                </button>
            </div>
            
            <div className='button-tab'>
                <button className='all-btn'>All</button>
                <button className='active-btn'>Active</button>
                <button className='completed-btn'>Completed</button>
            </div>

            {/* Task List */}
            <div className='task-list'>
                {tasks.map((task, index) => (
                    <div key={index} className='task-item'>
                        <span className='task-text'>{task}</span>
                        <div className='task-actions'>
                            <button 
                                className='edit-btn'
                                onClick={() => handleEdit(index)}
                            >
                                Edit
                            </button>
                            <button 
                                className='delete-btn'
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                            <button 
                                className='complete-btn'
                                onClick={() => handleCompleted(index)}
                            >
                                Complete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Task;