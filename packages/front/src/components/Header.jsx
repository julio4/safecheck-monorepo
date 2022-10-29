import { Link, Outlet } from 'react-router-dom';
import '../css/Header.css';

const Header = (props => {
  return (
    <>
      <header>
        <nav className='bar'>
          <div>
            <h1>SafeCheck</h1>
          </div>
          <ul>
            <li>
              <Link className='link' to='/contracts'>Contracts</Link>
            </li>
            <li>
              <Link className='link' to='/insights'>Insights</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
});

export default Header;