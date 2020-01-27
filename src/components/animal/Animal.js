import React from "react"
import { Link } from "react-router-dom"

export default ({animal}) => (
    <section className="animal">
        <div>
            <img className="icon" src={require ('./dog.svg')}/>
        </div>
        <div className="animal__name">
        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        </div>
        <div className="animal__breed">{animal.breed}</div>
        
    </section>
)




