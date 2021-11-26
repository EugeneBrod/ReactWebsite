import React, {Component} from 'react';
import demo from './../assets/secret_skate_demo.gif';

export class Horse extends Component {

  render () {
    return (
      <div className="Horse">
        <p>This project aims to connect people that want to play Horse in any context, ie. skateboarding or basketball.</p>
        <img src={ demo } alt="demo..." />
      </div>
    );
  }
}