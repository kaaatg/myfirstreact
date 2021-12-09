import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
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
            <div className="container">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-striped">
                    <thead>
                        <tr className="table-primary">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee => (
                                <tr key = {employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                    <Link 
                                    className="btn btn primary" 
                                    to={"/edit/${employee.employeeId}"}>Update</Link>
                                    </td>
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