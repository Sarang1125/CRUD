import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function EmpDel(props) {
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

  const handledelete = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmation) {
      // https://localhost:7296/api/Employee/
      fetch("https://localhost:7296/api/Employee/" + id, {
        method: "Delete",
      }).then((res) => console.log(res));
      navigate("/ListEmp");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="6" style={{ marginTop: 100 }}>
          <label>Id:</label>
          <input type="text" name="id" value={employee.id || ""} readOnly />
          <br />
          <label>name:</label>
          <input type="text" name="name" value={employee.name || ""} readOnly />
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={employee.email || ""}
            readOnly
          />
          <br />
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department || ""}
            readOnly
          />
          <br />
          <Button variant="primary" onClick={handledelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default EmpDel;
