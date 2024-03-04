import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditTask({ editTask, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
        setValue("");
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="d-flex">
                <Form.Control
                    type="text"
                    placeholder="Add Task"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <Button type="submit">Add</Button>
            </Form.Group>
        </Form>
    );
}

export default EditTask;
