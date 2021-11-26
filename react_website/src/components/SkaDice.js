import React, {Component} from 'react';
import pic_1 from './../assets/dice_1.png';
import pic_2 from './../assets/dice_2.png';
import pic_3 from './../assets/dice_3.png';


export class SkaDice extends Component {

  render () {
    return (
      <div className="SkaDice">
        <p>This was the first App that I created. Mainly focusing on the basics of creating iOS layouts and working with view controllers.</p>
        <p>As an avid skateboarder, I found the existing skate dice apps to lack a variety of tricks because they actually implmented dice logic.</p>
        <p>SkaDice offers a wider selection of tricks so that skaters can step out of their comfort zone and try manuvers that they may not normally try.</p>
        <img src={ pic_1 } />
        <img src={ pic_2 } />
        <img src={ pic_3 } />
      </div>
    );
  }
}