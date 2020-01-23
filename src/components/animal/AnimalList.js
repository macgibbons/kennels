import React, { useContext } from "react"
import "./Animals.css"
import { AnimalContext } from "./AnimalProvider";
import Animal from "./Animal";


export default () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
        {
            animals.map(anml => <Animal key={anml.id} animal={anml} />)
        }
        </div>
    )
}