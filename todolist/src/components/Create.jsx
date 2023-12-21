import React, { useState } from "react";
import axios from 'axios';

function Create(){
    const [task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:5000/add', {task:task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))

    }
    return (
        <div className="create">
            <input type="text" name="" id="" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)} className="create--input"/>
            <button type="button" onClick={handleAdd} className="create--button">Add</button>
        </div>
    )
}

export default Create