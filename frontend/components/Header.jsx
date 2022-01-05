import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { NextLink } from '@components';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <NextLink route='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </NextLink>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NextLink route='/cart'>
                <FaShoppingCart /> Cart
              </NextLink>
              <NextLink route='/login'>
                <FaUserAlt /> Sing up
              </NextLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
