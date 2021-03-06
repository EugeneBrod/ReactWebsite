import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <table>
        <tbody>
          <tr>
            <td><Link to='/'>About</Link></td>
            <td><Link to='/cScraper'>cScraper</Link></td>
            <td><Link to='/YoutubeRatio'>YoutubeRatio</Link></td>
            <td><Link to='/Horse'>Horse</Link></td>
            <td><Link to='/SkaDice'>SkaDice</Link></td>
            <td><Link to='/TestPage'>TestPage</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Navbar;