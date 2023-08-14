import React from "react";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ListEmp from "./components/ListEmp";
import PostEmp from "./components/PostEmp";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Employee from "./components/Employee";
import EmpEdit from "./components/EmpEdit";
import EmpDel from "./components/EmpDel";

function Routing() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route  path="Home" element={<Home />} />
            <Route path="ListEmp" element={<ListEmp />} />
            <Route path="PostEmp" element={<PostEmp />} />
            <Route path="emp/:id" element={<Employee />} />
            <Route path="empedit/:id" element={<EmpEdit />} />
            <Route path="empdel/:id" element={<EmpDel />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Routing;
