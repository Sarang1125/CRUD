import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import Table from "react-bootstrap/Table";

export function ListEmp(props) {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    // https://localhost:7296/api/Employee/
    fetch("http://localhost:8080/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);

  return (
    <div>
      <Table
        title="Employee List"
        striped
        bordered
        hover
        size="sm"
        style={{
          width: "100%",
          margin: "0 auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Display</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="text-center">
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <a href={"/emp/" + emp.id}>
                  <FontAwesomeIcon icon={faEye} />
                </a>
              </td>
              <td>
                <a href={"/empedit/" + emp.id}>
                  <FontAwesomeIcon icon={faEdit} />
                </a>
              </td>
              <td>
                <a href={"/empdel/" + emp.id}>
                  <FontAwesomeIcon icon={faTrash} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <caption
          className="text-center"
          style={{ captionSide: "bottom", fontWeight: "bolder" }}
        >
          Employee List
        </caption>
      </Table>
    </div>
  );
}

export default ListEmp;
