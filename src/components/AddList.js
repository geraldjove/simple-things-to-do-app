import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function AddList({ task, deleteTask, toggleEdit, toggleComplete }) {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center my-2">
                <Col
                    className={`${
                        task.isComplete ? "bg-success" : "bg-secondary"
                    } rounded-2`}
                    onClick={() => toggleComplete(task.id)}
                >
                    <Form.Check
                        label={task.task}
                        className={`${
                            task.isComplete ? "strikeText" : "normalText"
                        } text-light my-2`}
                        checked={task.isComplete}
                    ></Form.Check>
                </Col>
                <Col className="d-flex justify-content-around col-12 col-md-auto p-0 my-1">
                    <Button
                        className={`btn btn-warning mx-1`}
                        onClick={() => toggleEdit(task.id)}
                        disabled={task.isComplete}
                    >
                        Edit
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={() => deleteTask(task.id)}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddList;
