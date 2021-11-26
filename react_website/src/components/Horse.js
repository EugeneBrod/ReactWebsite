import React, {Component} from 'react';
import pic_1 from './../assets/horse_1.png';
import pic_2 from './../assets/horse_2.png';
import pic_3 from './../assets/horse_3.png';
import pic_4 from './../assets/horse_4.png';
import pic_5 from './../assets/horse_5.png';


export class Horse extends Component {

  render () {
    return (
      <div className="Horse">
        <p>This project aims to connect people that want to play Horse in any context, ie. skateboarding or basketball.</p>
        <img src={ pic_1 } />
        <img src={ pic_2 } />
        <img src={ pic_3 } />
        <img src={ pic_4 } />
        <img src={ pic_5 } />
      </div>
    );
  }
}