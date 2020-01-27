import React from "react"
import "./dog.svg"

export default ({animal, customer, location}) => (
    <section className="animal">
        <div>
        <img className="icon" src={require ('./dog.svg')}/>
        </div>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: { location.name }</div>
        <div className="animal__owner">Customer: { customer.name }</div>
    </section>
)



    