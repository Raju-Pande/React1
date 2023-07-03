// import React ,{Component} from "react";

// class Student extends Component{
//     render(){
//         return(
//             <>
//             <h1>Hello , {this.props.name}</h1>
//             <p>You have secure {this.props.marks}%</p>
//             <hr></hr>
//             </>
//         )
//     }
// }
// export default Student;

// Props are always passed from the parent to the child component. A component can have any number of attributes as props.

import React ,{Component} from "react";

class Student extends Component{
    render(){
        const {name,marks}=this.props;
        return(
            <>
            <h1>Hello , {name}</h1>
            <p>You have secure {marks}%</p>
            <hr></hr>
            </>
        )
    }
}
export default Student;