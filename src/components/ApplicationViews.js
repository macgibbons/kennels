import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import CustomerList from "./customer/CustomerList"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalForm from "./animal/AnimalForm";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";

export default (props) => {
    return (
        <>
            <LocationProvider>
                <AnimalProvider>
                    <EmployeeProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/">
                            <LocationList />
                        </Route>

                        <Route path="/locations/:locationId(\d+)" render={
                                    props => <LocationDetail {...props} />
                                } />
                    </EmployeeProvider>
                </AnimalProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render ={
                            props => <AnimalList {...props} />
                        }/>
    
                        <Route exact path="/animals/create" render = {
                            props => <AnimalForm {...props} />
                        } />

                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetail {...props} />
                        } />
                       
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render = {
                        props => <EmployeeForm {...props} />
                    } />
                       

                </LocationProvider>
            </EmployeeProvider>
            
        </>
    )
}

// You need to use the history.push() method again to take the user to a new view. Reference the code above to see how to do the following two tasks.

// Provide the React Router history object to the EmployeeForm component by refactoring ApplicationViews.
// Route the user to /employees.