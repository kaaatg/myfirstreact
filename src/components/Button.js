import React from "react";
import './Button.css';

class Button extends React.Component {
    
    constructor() {
        super ()
        this.state = {
            count : 0
        }
    }
    
    addCounter() {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }
    
    render() {
        return(
            <div>
                <button id ="button"
                onClick = {() => this.addCounter()}>Click all you can~</button>
                <p>counts = {this.state.count}</p>
            </div>
        )
    }
    
}

export default Button