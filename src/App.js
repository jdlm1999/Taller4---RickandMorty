import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ISIS3710</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Gallery</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Gallery />
    </>
  );
}

export default App;
