import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider";
import Customer from "./Customer";
import "./Customers.css"
import "../style/Button.css"


export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div className="customers">
        {
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </div>
    )
}