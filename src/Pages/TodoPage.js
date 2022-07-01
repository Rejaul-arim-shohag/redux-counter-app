import React from 'react';
import CreateTodo from '../Components/Todo/CreateTodo';
import TodoList from '../Components/Todo/TodoList';

const TodoPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-5">
                        <div>
                            <h5>My Todo</h5>
                        </div>
                        <div className="card-body">
                            <CreateTodo/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;