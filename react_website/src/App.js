import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
  <div class="avatar"></div>
  <h1>Hi. I'm Eugene.</h1>
  <div class="objective">
    <p>
      <span>Welcome, make yourself <a href="https://www.youtube.com/watch?v=PMgN6-CUoLQ&ab_channel=EllusionStudio">comfortable.</a></span>
    </p>
    <p>
    <span>I studied math and cs at <a href="https://www.berkeley.edu/">UC Berkeley.</a></span>
    </p>
    <p>
    <span><a href="https://en.wikipedia.org/wiki/Russia">Russian</a> born, <a href="https://en.wikipedia.org/wiki/San_Francisco_Bay_Area">Bay Area</a> native.</span>
    </p>
    <p>
      <span>Here is my <a download href='eugene_brodsky_resume.pdf'>resume.</a></span>
    </p>
  </div>
  <table class="social table">
    <tr>
      <td>
        <a href="https://github.com/EugeneBrod">
          <div>
            <i class="fab fa-github"></i>
          </div>
          <p>Github</p>
        </a>
      </td>
      <td>
        <a href="https://www.linkedin.com/in/eugene-brodsky-a78759148/">
          <div>
            <i class="fab fa-linkedin-in"></i>
          </div>
          <p>LinkedIn</p>
        </a>
      </td>
      <td>
        <a href="https://www.instagram.com/eugenebrod.sky/">
          <div>
            <i class="fab fa-instagram"></i>
          </div>
          <p>Instagram</p>
        </a>
      </td>
      <td>
        <a href="mailto:eugenebrod@eugenebrodsky.me">
          <div>
            <i class="fas fa-envelope"></i>
          </div>
          <p>Email</p>
        </a>
      </td>
    </tr>
  </table>
</body>
  );
}

export default App;
