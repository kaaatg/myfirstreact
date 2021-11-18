import helloServices from "../services/helloServices";
import {useEffect, useState} from "react";
const Hello = () =>{
    
    const[hello, setHello] = useState("")
    
    useEffect( () =>{
        helloServices.getHello()
        .then(response => {
            setHello(response.data)
        })
        .catch(err => {
            console.log("something went wrong!")
        })
    }
    )
    
    return hello;
}

export default Hello