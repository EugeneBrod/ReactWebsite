import React, {Component} from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import pic_1 from './../assets/dice_1.png';
import pic_2 from './../assets/dice_2.png';
import pic_3 from './../assets/dice_3.png';


export class SkaDice extends Component {

  render () {
    return (
      <div className="SkaDice">
        <Accordion>

          <AccordionSummary>
            About
          </AccordionSummary>
          <AccordionDetails>
            <p>This was the first App that I created. Mainly focusing on the basics of creating iOS layouts and working with view controllers. I found the existing skate dice apps to lack a variety of tricks because they actually implmented dice logic. SkaDice offers a wider selection of tricks so that skaters can step out of their comfort zone and try manuvers that they may not normally try.</p>
          </AccordionDetails>   
        </Accordion>
        <h1>Interactive home screen.</h1>
        <img src={ pic_1 } alt="pic_1"/>
        <img src={ pic_2 } alt="pic_2"/>
        <br></br>
        <h1>Large selection of tricks.</h1>
        <img src={ pic_3 } alt="pic_3"/>
      </div>
    );
  }
}