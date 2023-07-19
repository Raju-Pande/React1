import React from "react"
import Timer from "./Timer/TimerOne";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      mount:false
    }
  }

  handleMount=()=>{
    this.setState((prevState)=>(
      {
        mount:!prevState.mount
      }
    ))
  }
  render() {
    return (
      <>
      <button onClick={this.handleMount}>{this.state.mount? "UN-MOUNT":"MOUNT"}</button>
      {this.state.mount ? <Timer/>:null}
      </>
    
      )
  }
}

export default App;
