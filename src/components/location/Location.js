import React from "react"
import { Link } from "react-router-dom"
import "./Locations.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">

        <div>
            <img className="icon" src={require ('./home.svg')}/>
        </div>
        
            <Link to={`/locations/${location.id}`}>
                { location.name }
            </Link>
        </h3>
        <address className="location__address">{location.address}</address>
    </section>
)


