import React, {Component} from 'react';
import demo from './../assets/tasteful_demo.gif';

export class SkaDice extends Component {

  render () {
    return (
      <div className="SkaDice">
        <p>This was the first App that I created. Mainly focusing on the basics of creating iOS layouts and working with view controllers.</p>
        <p>As an avid skateboarder, I found the existing skate dice apps to lack a variety of tricks because they actually implmented dice logic.</p>
        <p>SkaDice offers a wider selection of tricks so that skaters can step out of their comfort zone and try manuvers that they may not normally try.</p>
        <img src={ demo } alt="demo..." />
      </div>
    );
  }
}