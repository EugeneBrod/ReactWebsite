import './Home.css';
import { Planet } from 'react-planet';
import pdf from './../assets/eugene_brodsky_resume.pdf';
import {Link} from 'react-router-dom';

function Home() {
  return (
  <body>
  <div class="avatar"></div>
  <h1>Hi. I'm Eugene.</h1>
  <div class="objective">
    <p>
    <span>I studied math and cs at <a href="https://www.berkeley.edu/">UC Berkeley.</a></span>
    </p>
    <p>
      <span>Here is my <a download href={ pdf } target= '_blank'>resume.</a></span>
    </p>
    <p>
      <span>Here is my <Link to='/cScraper'>cScraper.</Link></span>
    </p>
  </div>

  <div class="planets">
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
                  <i class="fab fa-github"></i>
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
                  <i class="fab fa-linkedin-in"></i>
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
                  <i class="fab fa-instagram"></i>
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
                  <i class="fas fa-envelope"></i>
                </div>
              </a>
            </div>
        </div>
      </Planet>
  </div>
</body>
  );
}

export default Home;
