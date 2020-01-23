import React, { useContext } from "react"
import "./Employees.css"
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";

export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
        {
            employees.map(emp => <Employee key={emp.id} employee={emp} />)
        }
        </div>
    )
}