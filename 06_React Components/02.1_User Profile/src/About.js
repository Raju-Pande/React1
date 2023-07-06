import { Component } from "react";

import {sname} from "./Hero"
class About extends Component {
  render() {
    return (
      <p>
      Hi, my name is {sname}. I am a full stack web developer and I have developed serveral projects with MERN stack. I am also familiar with Python and Django.
      </p>
    );
  }
}

export default About;
