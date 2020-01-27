import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"
import "./Animals.css"

export default (props) => {
    const { animals } = useContext(AnimalContext)
    // const { locations } = useContext(LocationContext)
    // const { customers } = useContext(CustomerContext)
    const currentUser = localStorage.getItem("kennel_customer")
    console.log(currentUser);

    const logInCheck = () => {
        if(currentUser === ""){
            window.alert("please log in")
        } else {
            console.log("user is logged in");
            
            updateApplicationView()
        
        }
    }

    const updateApplicationView = () => {
        props.history.push("/animals/create")
    }
    

    return (
        <div className="animals">
            <h1>Animals</h1>
            <button className="animalButton" onClick={ logInCheck
            }>
                Make an Appointment
            </button>
            <div className="animalList">

            {
                animals.map(animal => {

                    
                    // const owner = customers.find(c => c.id === animal.customerId)
                    // const clinic = locations.find(l => l.id === animal.locationId)

                    return <Animal key={animal.id} animal={animal} />
                })                
            }
            
            </div>
        </div>
    )
}