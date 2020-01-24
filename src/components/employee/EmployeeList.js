import React, { useContext } from "react"
import "./Employees.css"
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";

export default (props) => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
            </article>
        </div>
    )
}