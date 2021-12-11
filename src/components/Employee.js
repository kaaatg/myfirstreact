import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import employeeService from "../services/employeeService"
import './Employee.css';

const Employee = () =>{
    
    const[employees, setEmployees] = useState([]);
    
    useEffect(() =>{
        refreshEmployeeTable(); 
    })     
    
    const refreshEmployeeTable = () => {
        employeeService.getEmployees()
        .then(
            response =>{
                setEmployees(response.data);
            }
        )
    
        .catch(
            err =>{
                console.log("Something went wrong >:(");
            }
        )
    }
    
    const deleteEmployee = (employeeId) =>{
        employeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Successfully deleted employee!");
                refreshEmployeeTable();
            }
        )
        
        .catch(
            error =>{
                console.error("Something went wrong >:(", error);
            }
        )
    }
    
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
                                        <div className="d-grid gap-2 d-md-flex">
                                            <Link 
                                            className="btn btn primary" 
                                            to={"/employees/edit/${employee.employeeId}"}>Update</Link>
                                            <button 
                                            className="btn btn danger" onClick={() =>deleteEmployee(employee.employee.Id)}>Delete</button>
                                        </div>
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