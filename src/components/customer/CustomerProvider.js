import React, { useState, useEffect } from "react"


export const CustomerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    // this is the name of the data in the entireity of the application!! (locations)
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }

    /*
        Load all Customers when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
        console.log("****  CUSTOMER APPLICATION STATE CHANGED  ****")
    }, [customers])

    return (
        <CustomerContext.Provider value={{
            customers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}
