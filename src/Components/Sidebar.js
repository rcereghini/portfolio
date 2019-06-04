import React, { Component, Fragment } from "react";
import bob from "../bob.jpeg";
import "./sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("hi");
  }

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <div className="mainDiv">
          <img
            src={bob}
            style={{
              borderRadius: "50%",
              margin: "1em auto",
              boxShadow: "0px 0px 10px 0px white"
            }}
          />
          <ul>
            <li>Top</li>
            <li>Languages</li>
            <li>Frameworks</li>
            <li>Libraries</li>
            <li>Samples</li>
            <li>Education</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
