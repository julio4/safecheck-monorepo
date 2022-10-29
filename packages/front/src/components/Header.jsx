import { Link, Outlet } from 'react-router-dom';
import '../css/Header.css';

import { Button } from '@chakra-ui/react';

const Header = (props => {
  return (
    <>
      <header>
        <nav className='bar'>
          <div>
            <Link to='/'>
              <Button colorScheme="orange" variant="outline">SafeCheck</Button>
            </Link>
          </div>
          <ul>
            <li>
              <Link to='/contracts/0x0'>
                <Button colorScheme="orange" bgGradient='linear(to-r, red.200, orange.500)'>Contracts</Button>
              </Link>
            </li>
            <li>
              <Link to='/insights'>
                <Button colorScheme="orange" bgGradient='linear(to-r, red.200, orange.500)'>Insights</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
});

export default Header;