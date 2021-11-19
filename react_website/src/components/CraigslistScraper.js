import './CraigslistScraper.css';
import React, { Component } from "react";

export class CraigslistScraper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.buttonClicked = this.buttonClicked.bind(this)
  }
  
  buttonClicked(event) {
    this.setState({counter: this.state.counter+1})
  }
  

  render() {
    return (
      <div>
        <p>Under Construction. Features coming soon!</p>
        <div>{this.state.counter}</div>
        <button onClick={this.buttonClicked}>Click</button>
      </div>
    );
  }
}