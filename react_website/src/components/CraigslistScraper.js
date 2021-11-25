import './CraigslistScraper.css';
import React, { Component } from "react";
import axios from 'axios';

const BASEURL = "https://cscraper-jzmexnpjzq-uc.a.run.app"

export class CraigslistScraper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetURLs: "",
      recipientList: "",
      msg: ""
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
        if (res.data.success) {
          const path = BASEURL + '/start';
          axios.get(path)
            .then((res) => {
              if (res.data.success) {
                this.setState({msg: "Launched Scraper"})
              } else {
                this.setState({msg: "Scraper already in use."})

              }
            })
            .catch((error) => {
              this.setState({msg: "Something went wrong."})
            });
        } else {
          this.setState({msg: "Something went wrong"})
        }
        
      })
      .catch((error) => {
        console.log(error);
        this.setState({msg: "Something went wrong."})
      });
  }

  stopButtonHandler(event) {
    const path = BASEURL + '/stop';
    this.occupied = false;
    axios.get(path)
      .then((res) => {
        if (res.data.success) {
          this.setState({msg: "Stopped scraper"})
        } else {
          this.setState({msg: "Scraper not running yet."})
        }
      })
      .catch((error) => {
        this.setState({msg: "Something went wrong."})
      });
  }
  

  render() {
    return (
      <div className="CraigslistScraper">
        <br/>
        <p>This is an interface to the Craigslist Scraper that I have built.</p>
        <p>It's been dockerized to run on Google's Cloud Run.</p>
        <br/>
        <p>If you do not recieve an email right away, try pressing the stop button. This will kick out the current user of the scraper.</p>
        <p>Survival of the most persistent I suppose.</p>
        <br/>
        <p>EXAMPLE:</p>
        <p>left box: https://sfbay.craigslist.org/d/for-sale/search/sss, https://sfbay.craigslist.org/search/ata?purveyor-input=all&max_price=2000</p>
        <p>right box: some_email@gmail.com, another_email@gmail.com</p>
        <input className="targetURLs" type="text" onChange={(e) => this.targetURLsHandler(e)} placeholder="URLs to scrape."></input>
        <input className="recipientList" type="text" onChange={(e) => this.recipientListHandler(e)} placeholder="recipients to notify of new posts"></input>
        <button className="startButton" onClick={this.startButtonHandler}>Start</button>
        <button className="stopButton" onClick={this.stopButtonHandler}>Stop</button>
        <p className="ErrorMsg">{ this.state.msg }</p>
      </div>
    );
  }
}