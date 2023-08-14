import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export function Employeeedit(props) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:7296/api/Employee/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let demo = JSON.stringify(employee);

    fetch("https://localhost:7296/api/Employee/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((response) => {
      if (response.ok) {
        navigate("/ListEmp");
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="6" style={{ marginTop: 100 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formId">
              <Form.Label>Id:</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={employee.id || ""}
                onChange={handleChange}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={employee.name || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={employee.email || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDepartment">
              <Form.Label>Department:</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={employee.department || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label> </Form.Label>
            <Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Update
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Employeeedit;
