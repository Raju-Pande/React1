import React from "react";

class Timer extends React.Component {

    constructor() {
        super();
        console.log("TimerOne Constructor");
    }

    static getDerivedStateFromProps() {
        console.log("TimerOne getDerivedStateFromProps ");
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        console.log("TimerOne render");
        return (<h1>Timer</h1>)
    }
    componentDidMount() {
        console.log("TimerOne componentDidMount");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("TimerOne componentDidUpdate");
    }
}

export default Timer;