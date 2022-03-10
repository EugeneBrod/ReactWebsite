import React, {Component} from 'react';
import './HomeV2.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';



export class HomeV2 extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className="section" />
                <div id="trigger" />
                <Controller>
                    <Scene
                        triggerElement="#trigger"
                        duration={300}
                    >
                        {(progress) => (
                        <Tween            
                            to={{
                            left: '0px',
                            rotation: -360,
                            width: '200px',
                            height: '200px',
                            }}       
                            ease="Strong.easeOut"
                            totalProgress={progress}
                            paused
                        >
                            <div className="tween">Pin Test</div>
                        </Tween>    
                        )}
                    </Scene>
                    <Scene
                        triggerElement="#trigger"
                        duration={600}
                        pin={false}
                    >
                        <Tween
                        from={{
                            css: {
                            left: '0px',
                            rotation: -720,
                            width: '200px',
                            height: '200px',
                            },
                            ease: 'Strong.easeOut',
                        }}
                        to={{
                            css: {
                            left: '100px',
                            rotation: 900,
                            width: '50px',
                            height: '50px',
                            },
                            ease: 'Weak.easeOut',
                        }}
                        paused
                        >
                        <div className="tween">Pin Test 2</div>
                        </Tween>        
                    </Scene>
                    <Scene
                        duration={500}
                    >
                            <Tween        
                            staggerFrom={{
                                left: 700,
                            }}
                            staggerTo={{
                                left: 0,
                                ease: 'Strong.easeOut',
                            }}
                            stagger={0.15}
                            paused
                            >
                            <div className="stagger">
                                HI
                            </div>
                            <div className="stagger">
                                HI
                            </div>
                            <div className="stagger">
                                HI
                            </div>
                            <div className="stagger">
                                HI
                            </div>
                            </Tween>
                    </Scene>
                    </Controller>
                    <div className="section" />
            </div>
        );
    }
}
