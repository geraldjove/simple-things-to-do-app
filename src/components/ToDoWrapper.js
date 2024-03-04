import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import AddForm from "./AddForm";
import AddList from "./AddList";
import EditTask from "./EditTask";
import { v4 as uuidv4 } from "uuid";

function ToDoWrapper() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("todos");
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    });

    const addTask = (task) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: task,
                isComplete: false,
                isEditing: false,
            },
        ]);
        console.log(todos);
    };

    const deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleEdit = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
        console.log(todos);
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          task: task,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          isComplete: !todo.isComplete,
                      }
                    : todo
            )
        );
        console.log(todos);
    };

    const clearAll = () => {
        setTodos([]);
    };

    return (
        <div className="container">
            <Card className="w-100">
                <Card.Header>
                    <Card.Title className="text-center">
                        Simple Things To Do
                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <AddForm addTask={addTask} />
                    {todos.map((todo, index) =>
                        todo.isEditing ? (
                            <EditTask
                                editTask={editTask}
                                task={todo}
                                key={index}
                            />
                        ) : (
                            <AddList
                                task={todo}
                                key={index}
                                deleteTask={deleteTask}
                                toggleEdit={toggleEdit}
                                toggleComplete={toggleComplete}
                            />
                        )
                    )}
                    {todos.length > 0 && (
                        <Button onClick={() => clearAll()} className="my-1">
                            Clear All
                        </Button>
                    )}
                </Card.Body>
                <Card.Footer className="text-center">
                    Developed By Gerald Jove | ©2024
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ToDoWrapper;
