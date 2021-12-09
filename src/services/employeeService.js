import httpclient from "../commons/httpclient";

const getEmployees = () =>{
    return httpclient.get('/employees')
}

const postEmployee = (data) =>{
    return httpclient.post('/employees', data)
}

const putEmployee = (data) =>{
    return httpclient.put('/employees', data)
}

const getEmployee = (id) =>{
    return httpclient.get('/employees/${id}')
}

export default {getEmployees, postEmployee, putEmployee, getEmployee}