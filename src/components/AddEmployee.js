import {useState, useEffect} from "react"
import {useNavigate, useParams} from 'react-router'
import employeeService from "../services/employeeService";

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();
    
    useEffect(() =>{
        if(employeeId){
            employeeService.getEmployee(employeeId)
            .then(
                employee =>{
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                }
            )
            
            .catch(
                error =>{
                    console.error("Something went wrong >:(", error)
                }
            )
        }   
    },[])
    
    const saveEmployee = (e) => {
        e.preventDefault();
        
        if(employeeId){
            const employee = {employeeId, name, location, department};
            employeeService.putEmployee(employee)
            .then(
                response => {
                    console.log('Updated employee!', response.data)
                    navigate('/employee')
                }
            )

            .catch(
                error => {
                    console.error('Something went wrong >:(')
                }
            )    
        }
        
        else{
            employeeService.postEmployee(employeeId)
            .then(
                response => {
                    console.log('Employee added!');
                    navigate('/employee');
                }
            )

            .catch(
                error => {
                    console.log('something went wrong >:(')
                }
            )
        }
    }

return(
    <div className="container">
        <h3>Add employee</h3>
        <form>
            <div className="mb-3">
                <label for="nameField" className="form-label">Name</label>
                <input 
                type="text" 
                className="form-control"
                id="nameField" 
                placeholder="Add employee name"
                onChange={
                    (e) => {
                       setName(e.target.value)
                    }
                }
                />
            </div>
            
            <div className="mb-3">
                <label for="locationField" className="form-label">Location</label>
                <input 
                type="text" 
                className="form-control"
                id="locationField" 
                placeholder="Add employee location"
                onChange={
                    (e) => {
                        setLocation(e.target.value)
                    }
                }
                />
            </div>
            
            <div className="mb-3">
                <label for="departmentField" className="form-label">Department</label>
                <input 
                type="text" 
                className="form-control"
                id="departmentField" 
                placeholder="Add employee department"
                onChange={
                    (e) => {
                        setDepartment(e.target.value)
                    }
                }
                />
            </div>
            <button type="submit" 
            className="btn btn-primary" 
            onClick={(e) => saveEmployee(e)}>Save
            </button>
        </form>
    </div>
)
}

export default AddEmployee