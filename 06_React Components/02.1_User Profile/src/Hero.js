import { Component } from "react";

export let sname = "Raj";
class Hero extends Component {
  render() {

    const mname = "Prakash"
    const lname = "Pande"
    const email = "rpande400@gmail.com"
    return (
      <div>
        <h3>Name: {sname} {mname} {lname}</h3>
        <p>Email: {email}</p>
        <p>Phone: 9623242374</p>
        <p>Address: Sargam Society lane no:1, Karve Nagar, Pune</p>
      </div>
    );
  }
}

export default Hero;


