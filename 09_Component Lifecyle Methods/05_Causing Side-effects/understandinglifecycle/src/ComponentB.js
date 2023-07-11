
import React from "react"
class ComponentB extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "ComponentB"
        }

        console.log("ComponentB Constructor");

    }

    static getDerivedStateFromProps(props, state) {
        console.log("ComponentB getDerivedStateFromProps ");
        
        return null;
    }

    componentDidMount() {
        console.log("ComponentB componentDidMount");

    }

    render() {
        console.log("ComponentB render");

        return (
            <h3>{this.state.name}</h3>
        )
    }

}
export default ComponentB;
