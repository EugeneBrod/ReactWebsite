import './App.css';
import { Planet } from 'react-planet';
import pdf from './assets/eugene_brodsky_resume.pdf';

function App() {
  return (
  <body>
  <div class="avatar"></div>
  <h1>Hi. I'm Eugene.</h1>
  <div class="objective">
    <p>
      <span><a href="https://www.youtube.com/watch?v=PMgN6-CUoLQ&ab_channel=EllusionStudio">Welcome.</a></span>
    </p>
    <p>
    <span>I studied math and cs at <a href="https://www.berkeley.edu/">UC Berkeley.</a></span>
    </p>
    <p>
      <span>Here is my <a download href={ pdf } target= '_blank'>resume.</a></span>
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
              height: 100,
              width: 100,
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
        open
        autoClose
        orbitRadius={150}
        rotation={90}
        
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div
          style={{
            height: 70,
            width: 70,
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
            height: 70,
            width: 70,
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
            height: 70,
            width: 70,
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
            height: 70,
            width: 70,
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

export default App;
