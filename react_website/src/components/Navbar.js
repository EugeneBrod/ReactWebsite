import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <table>
        <tr>
          <td><Link to='/'>Home</Link></td>
          <td><Link to='/cScraper'>cScraper</Link></td>
        </tr>
      </table>
    </div>
  );
}

export default Navbar;