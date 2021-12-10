import React, {Component} from 'react';
import yRatio from './../assets/yRatio.jpeg'

export class YRatio extends Component {

  render () {
    return (
      <div className="yRatio">
        <p>Install YoutubeRatio <a target='_blank' href='https://chrome.google.com/webstore/detail/yratio/cdeikckdpancilnmeojckofeoojhdkal'>here.</a></p>
        <img src={ yRatio } alt='yRatio'/>
      </div>
    );
  }
}