import React, { useContext } from "react"
import "./Employees.css"
import { EmployeeContext } from "./EmployeeProvider";


export default ({ employee }) => {
    const { releaseEmployee } = useContext(EmployeeContext)
    
    return(
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">{employee.location}</div>
            <button className="btn--release"
                        onClick={() => {
                            releaseEmployee(employee.id)
                                
                    }}
            >Fire Employee</button>
    </section>
)}

