import React, { Fragment, useState, useEffect } from "react";

//Components
import EditTodo from "./EditTodo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/todos/${id}`, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.id != id));
        } catch (error) {
            console.log(error.message);
        }
    };

    const getTodos = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/todos`);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.log(error.message);
        };
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
        </Fragment>
    );
};

export default Todos;