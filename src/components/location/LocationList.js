import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">
            <h1>Nashville Kennels</h1>
            <div>    
                <small>Loving care when you're not there.</small>
                <address>
                    <div>Visit Us at one of our two Nashville Locations</div>
                </address>
            </div>
            <div className="location__list">
                {
                    locations.map(loc => <Location key={loc.id} location={loc} />)
                }
            </div>
        </div>
    )
}