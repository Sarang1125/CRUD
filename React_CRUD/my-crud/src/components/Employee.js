import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListEmp from "./ListEmp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Employee() {
  <ListEmp />;
  const [employee, setEmployee] = useState({});
  const { id } = useParams(); // code -> id
  useEffect(() => {
    // https://localhost:7296/api/Employee/
    fetch("http://localhost:8080/api/Employee" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, [id]);

  const go = () => {
    window.history.back();
  };

  return (
    <div className="App">
      <center>
        <Card style={{ width: "18rem", marginTop: 50 }}>
          <Card.Img variant="top" src="\images\emp.jpg" />
          <Card.Body>
            <Card.Title>Employee Details</Card.Title>
            <Card.Text>
              Id : {employee.id}
              <br></br>
              Name : {employee.name}
              <br></br>
              Email : {employee.email}
              <br></br>
              Department : {employee.department}
            </Card.Text>
            <Button variant="primary" onClick={go}>
              Go back
            </Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default Employee;
