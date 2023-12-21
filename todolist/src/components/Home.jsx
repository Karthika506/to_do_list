import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill} from 'react-icons/bs'

function Home(){
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])
    const handleEdit = (id) => {
        axios.put(`http://localhost:5000/update/${id}`)
        .then(result=> {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:5000/delete/${id}`)
        .then(result=> {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <h2 className="heading">Todo List</h2>
            <Create/>
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                :
                todos.map((todo) => (
                    <div key={todo._id} className="task">
                        <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                            {todo.done === true ? <BsFillCheckCircleFill className="icon"/> 
                            : <BsCircleFill className="icon" />}
                            
                            <p className={todo.done === true ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home