import React, { useContext } from "react"
import { LocationContext } from "../location/LocationProvider"
import { locationContext } from "./LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import "./Locations.css"
import { Link } from "react-router-dom"



export default (props) => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { employees } = useContext(EmployeeContext)


    const chosenLocationId = parseInt(props.match.params.locationId, 10)

    const animalArray = animals.filter(a => a.locationId === chosenLocationId) || {}
    const employeeArray = employees.filter(e => e.locationId === chosenLocationId)
    const location = locations.find(l => l.id === chosenLocationId) || {}

    return (
        <section className="location__detail">
            <h3 className="location__name">{ location.name }</h3>
            <address>{ location.address }</address>
            <div>Currently carring for {
                animalArray.map( (a)=> {
                    return  <Link to={`/animals/${a.id}`}>
                                { a.name }, { }
                            </Link>
                })
            }
            </div>

            <div className="location__employeeHeader">We currently have {employeeArray.length} well-trained animal lovers and trainers</div>
            <div className="location__employees"> 
                {
                    employeeArray.map( (e)=>{
                        return `${e.name}, `
                    })
                }
            </div>
        </section>
    )

}