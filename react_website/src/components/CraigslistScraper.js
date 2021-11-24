import './CraigslistScraper.css';
import React, { Component } from "react";
import axios from 'axios';

const BASEURL = "https://cscraper-jzmexnpjzq-uc.a.run.app"

export class CraigslistScraper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetURLs: "",
      recipientList: ""
    }
    this.targetURLsHandler = this.targetURLsHandler.bind(this)
    this.recipientListHandler = this.recipientListHandler.bind(this)
    this.startButtonHandler = this.startButtonHandler.bind(this)
    this.stopButtonHandler = this.stopButtonHandler.bind(this)


  }
  
  targetURLsHandler(e) {
    this.setState({targetURLs: e.target.value})
  }

  recipientListHandler(e) {
    this.setState({recipientList: e.target.value})
  }

  startButtonHandler(event) {
    const path = BASEURL + '/setSettings';
    const payload = {
      recipient_emails: this.state.recipientList.split(/[ ,]+/),
      urls: this.state.targetURLs.split(/[ ,]+/),
    };
    console.log(payload)
    axios.post(path, payload)
      .then((res) => {
        console.log(res.data.success);
        const path = BASEURL + '/start';
        axios.get(path)
          .then((res) => {
            console.log(res.data.success);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  stopButtonHandler(event) {
    const path = BASEURL + '/stop';
    this.occupied = false;
    console.log("hello")
    axios.get(path)
      .then((res) => {
        console.log(res.data.success);
        console.log("yes")
      })
      .catch((error) => {
        console.log("no")
        console.log(error);
      });
    console.log("bye")
  }
  

  render() {
    return (
      <div className="CraigslistScraper">
        <br/>
        <p>This is an interface to the Craigslist Scraper that I have built.</p>
        <p>I was hosting the scraper at home, but I will dockerize it and host it really soon.</p>
        <br/>
        <h1>How to use:</h1>
        <p>In the left box, input the Craigslist URLs that you want to scrape, separated by commas or spaces.</p>
        <p>In the right box, input the email addresses you would like to be notified when new posts are available.</p>
        <p>If you do not recieve an email right away, try pressing the stop button. This will kick out the current user of the scraper.</p>
        <p>Survival of the most persistent I suppose.</p>
        <input className="targetURLs" type="text" onChange={(e) => this.targetURLsHandler(e)} placeholder="URLs to scrape."></input>
        <input className="recipientList" type="text" onChange={(e) => this.recipientListHandler(e)} placeholder="recipients to notify of new posts"></input>
        <div>{this.state.counter}</div>
        <button className="startButton" onClick={this.startButtonHandler}>Start</button>
        <button className="stopButton" onClick={this.stopButtonHandler}>Stop</button>
      </div>
    );
  }
}