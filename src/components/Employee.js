import {useEffect, useState} from "react"
import employeeService from "../services/employeeService"
import './Employee.css';

const Employee = () =>{
    
    const[employees, setEmployees] = useState([])
    
    useEffect(
        () =>{
            employeeService.getEmployees()
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                () =>{
                    console.log("Something went wrong >:(")
                }
            )
        }
    )
    
    return(
            <div id="employee">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-striped>
                    <thead>
                        <tr className="table-primary">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee => (
                                <tr>
                                    <td>{employee.name}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.department}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee