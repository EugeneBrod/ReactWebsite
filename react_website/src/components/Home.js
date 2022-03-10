import './Home.css';
import { Planet } from 'react-planet';
import pdf from './../assets/eugene_brodsky_resume.pdf';
import {Link} from 'react-router-dom';

function Home() {
  return (
  <div className="Home">
  <div className="avatar"></div>
  <h1>Hi. I'm Eugene.</h1>
  <div className="objective">
    <p>
    <span>I studied math and cs at <a href="https://www.berkeley.edu/">UC Berkeley.</a></span>
    </p>
    <p>
    <span>I'm currently a software development engineer intern at <a href="http://www.kineticreality.com/">Kinetic Reality.</a> I work on developing our cloud and embedded systems.</span>
    </p>
    <p>
    <span>We're building the world's most affordable full body motion capture system with applications in animation, sports, and gaming.</span>
    </p>
    <p>
      <span>**********************************************************************************************************</span>
    </p>
    <p>
      <span>Here's my <a download href={ pdf } rel="noreferrer" target= '_blank'>resume.</a></span>
    </p>
  </div>

  <div className="planets">
    <Planet
        orbitStyle={defaultStyle => ({
          ...defaultStyle,
          borderWidth: 0,
        })}
        centerContent={
          <div
            style={{
              height: 75,
              width: 75,
              borderRadius: '50%',
              backgroundColor: '#c7fffd',
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            >
              <b>Links</b>
            </div>
          </div>
        }
        dragablePlanet
        autoClose
        orbitRadius={100}
        rotation={270}
        
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div
          style={{
            height: 45,
            width: 45,
            borderRadius: '50%',
            backgroundColor: '#eabdff',
          }}
        >
          <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            >
              <a href="https://github.com/EugeneBrod">
                <div>
                  <i className="fab fa-github"></i>
                </div>
              </a>
            </div>
        </div>
        <div
          style={{
            height: 45,
            width: 45,
            borderRadius: '50%',
            backgroundColor: '#eabdff',
          }}
        >
          <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            >
              <a href="https://www.linkedin.com/in/eugene-brodsky-a78759148/">
                <div>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>
            </div>
        </div>
        <div
          style={{
            height: 45,
            width: 45,
            borderRadius: '50%',
            backgroundColor: '#eabdff',
          }}
        >
          <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            >
              <a href="https://www.instagram.com/eugenebrod.sky/">
                <div>
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
            </div>
        </div>
        <div
          style={{
            height: 45,
            width: 45,
            borderRadius: '50%',
            backgroundColor: '#eabdff',
          }}
        >
          <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            >
              <a href="mailto:eugenebrod@eugenebrodsky.me">
                <div>
                  <i className="fas fa-envelope"></i>
                </div>
              </a>
            </div>
        </div>
      </Planet>
  </div>
</div>
  );
}

export default Home;
