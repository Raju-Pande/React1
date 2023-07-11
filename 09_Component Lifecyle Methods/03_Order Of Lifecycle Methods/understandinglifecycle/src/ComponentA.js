
import React from "react"
class ComponentA extends React.Component {

    constructor(){
        super();
        this.state={
            name:"ComponentA"
        }
        console.log("ComponentA Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps ");
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
    }

    render() {
        console.log("ComponentA render");
        return (
            <h1>{this.state.name}</h1>
        )
    }

}
export default ComponentA;

// mcq

// q.1 What would be logged in the console after the following code is executed?

// Constructor, DerivedStateFromProps, Render, ComponentDidMount

// The order of placing the lifecycle methods in the code does not matter. They will be executed in the same sequence as given in option c.