import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import SearchInput from '../SearchInput';
import Auth from '../../Auth';

const Navigation = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Wherbal</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link className="nav-link" to='/my_plants'>My Plants</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to='/wishlist'>Wishlist</Link>
            </NavItem>
          </Nav>
        <SearchInput />
        </Collapse>
        <Auth />
      </Navbar>
    </div>
  );
};

export default Navigation;
