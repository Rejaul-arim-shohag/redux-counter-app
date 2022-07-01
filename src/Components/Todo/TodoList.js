import React from 'react';
import { useSelector } from 'react-redux'
import { deleteAlert } from './TodoDeleteAlert';
import { todoEdit } from './TodoEditAlert';
const TodoList = () => {
    const todoItems = useSelector((state) => state.todo.value);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoItems.map((item, index) => {
                                    return ( 
                                        <tr key={index.toString()}>
                                            <td>{index}</td>
                                            <td>{item}</td>
                                            <td><button onClick={()=>todoEdit(index,item)} className="btn btn-sm btn-primary">Edit</button></td>
                                            <td><button onClick={()=>deleteAlert(index)} className="btn btn-sm btn-danger">Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;