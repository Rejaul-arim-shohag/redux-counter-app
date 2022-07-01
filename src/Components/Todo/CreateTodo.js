import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/state/todo/todSlice';

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef()
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <input ref={taskInput} placeholder="Task Name" className="form-control" type="text" />
                    </div>
                    <div className="col-md-2">
                        <button onClick={()=>dispatch(addTodo(taskInput.current.value))} className="btn btn-primary w-100">Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;