// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  state = {
    mood: "happy",
  };

  changeMood = () => {
    this.setState((pS) => ({
      mood: pS.mood === "happy" ? "sad" : "happy",
    }));
  };

  render() {
    return <div onClick={this.changeMood}>{this.state.mood}</div>;
  }
}
export default SimpleComponent;
