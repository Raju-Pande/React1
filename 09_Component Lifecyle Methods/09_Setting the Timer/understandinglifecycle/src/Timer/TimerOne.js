// import React from "react";

// class Timer extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//         console.log("TimerOne Constructor");
//     }

//     static getDerivedStateFromProps() {
//         console.log("TimerOne getDerivedStateFromProps ");
//         return null
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         return true;
//     }

//     handleIncrease = () => {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render() {
//         console.log("TimerOne render");
//         return (
//             <>
//         <h1>Counter</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.handleIncrease}>Increase</button>
//         </>
//         )
//     }
//     componentDidMount() {
//         console.log("TimerOne componentDidMount");
//         console.log("_______________________");
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("TimerOne getSnapshotBeforeUpdate");
//         return null;
//     }
//     componentDidUpdate() {
//         console.log("TimerOne componentDidUpdate");
//         console.log("_______________________");
//     }
// }

// export default Timer;





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
                <h1>Time Spent: {new Date(this.state.time * 1000).toISOString().slice(11,19)}</h1>
               
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
}

export default Timer;

