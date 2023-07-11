
import React from "react"

import ComponentB from "./ComponentB";
class ComponentA extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "ComponentA",
            data: []
        }

        console.log("ComponentA Constructor");

    }

    static getDerivedStateFromProps(props, state) {
        console.log("ComponentA getDerivedStateFromProps ");

        return null;
    }

    // you go to the damy fetching data link json placeholder  link: https://jsonplaceholder.typicode.com/
    // https://jsonplaceholder.typicode.com/users

    componentDidMount() {
        console.log("ComponentA componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users ')
            .then(response => response.json())
            .then(data => this.setState({ data }))

    }

    render() {
        // console.log(this.state.data);

        return (
            <>
                <h1>{this.state.name}</h1>

                <ul>
                    {this.state.data.map((d, index) => {
                        return (
                            <>
                                <li key={index}> Name:  {d.name} </li>
                                <li key={index}> Username: {d.username} </li>
                            </>
                        )
                    })}
                </ul>
            </>
        )
    }

}
export default ComponentA;



