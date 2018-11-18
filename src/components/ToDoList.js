import React from 'react';
import ToDoItem from './ToDoItem';


const styling = {
    toDoListWrap: {
        width: '33%',
        border: "1px solid black",
        padding: '50px 30px',
        overflow: 'scroll',
        borderRadius: '10px'
    }
}

const toDoList = () => <div style={styling.toDoListWrap}><ToDoItem /></div>

export default toDoList;