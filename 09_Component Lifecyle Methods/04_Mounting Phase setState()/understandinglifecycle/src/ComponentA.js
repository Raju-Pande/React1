
import React from "react"
class ComponentA extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "ComponentA"
        }

        console.log("ComponentA Constructor");

        // this.setState({
        //     // here don't change to allow the state inside constructor
        //     name: "CA"
        // })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("ComponentA getDerivedStateFromProps ");

        //  here can not directly  the setState use here any one condition "if(condition)" apply after use the "setState()" no any conditon use that time only return the null e.g return null

        // setState({

        //     name: "CA"
        // })

        return null;
    }

    componentDidMount() {
        console.log("ComponentA componentDidMount");

        // here side effect 
    }

    render() {
        console.log("ComponentA render");

        // this.setState({
        //     // here inside infinite loop  -render function again and again calling

        //     // render function is pure function and here no state changes
        //     name: "CA"
        // })


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




// mcq
// Q.1 this.setState() method cannot be used in getDerivedStateFromProps() because

// getDerivedStateFromProps() is a static method
// this is undefined in getDerivedStateFromProps()



// As getDerivedStateFromProps() is a static method, it does not have access to the instance of the component class. The this keyword is undefined in the getDerivedStateFromProps() method so the setState() method cannot be used.