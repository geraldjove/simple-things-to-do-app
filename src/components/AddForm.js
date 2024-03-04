import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddForm({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
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

export default AddForm;
