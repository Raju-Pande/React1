import React from "react";

class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            time: 0
        }
        this.timer = null
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
        return (
            <>
                <h1>Time Spent: {new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h1>

            </>
        )
    }
    componentDidMount() {
        console.log("TimerOne componentDidMount");
        console.log("_______________________");

        this.timer = setInterval(() => {
            this.setState((prevState) => (
                {
                    time: prevState.time + 1
                }
            ))
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("TimerOne componentDidUpdate");
        console.log("_______________________");
      
    }

    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount");
        clearInterval(this.timer)
    }
}

export default Timer;

