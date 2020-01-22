import React from "react"
import Animal from "./animal/Animal";
import "./Kennel.css"
import "./animal/Animals.css"
import Customer from "./customer/Customer";
import "./customer/Customers.css"
import Location from "./location/Location";
import "./location/Locations.css"
import Employees from "./employee/Employees";
import "./employee/Employees.css"


export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employees />
            <Employees />
            <Employees />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)