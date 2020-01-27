import React, { useContext, useRef } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider";
import { CustomerContext } from "../customer/CustomerProvider";



export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)
    const animalName = useRef("")
    const animalLocation = useRef(0)
    const animalBreed = useRef("")

    const constructNewAnimal = () => {
        const locationId = parseInt(animalLocation.current.value)
    
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: animalName.current.value,
                locationId: locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer"), 10),
                breed: animalBreed.current.value
            })
        }
    }

          
              

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Make an Appointment</h2>
            <div className="form-group">
                <input
                    type="text"
                    id="animalName"
                    ref={animalName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="animal name"
                />
                
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="animalBreed"
                    ref={animalBreed}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="animal breed"
                />
                
            </div>
            <div className="form-group">
                <select
                    defaultValue=""
                    name="location"
                    ref={animalLocation}
                    id="animalLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAnimal();
                        props.history.push("/animals")
                    }
                }
              
               
                className="btn btn-primary form-group">
                Make Appointment
            </button>
        </form>
    )
}

