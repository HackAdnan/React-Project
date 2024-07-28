import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/images/nexcent-logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" style={{marginBottom : '1rem'}}>
      <Container>
        <Navbar.Brand href='/'>
          <img className="nav-logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse className='basic-navbar-nav justify-content-between'>
          <Nav className="me-auto ml-200 ms-auto"> {/* Added ms-auto to push items to the right */}
            <Nav.Link
              href='#home'
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#features'
              className={activeLink === 'features' ? 'active' : ''} 
              onClick={() => onUpdateActiveLink('features')}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href='#community'
              className={activeLink === 'community' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('community')}
            >
              Community
            </Nav.Link>
            <Nav.Link
              href='#blog'
              className={activeLink === 'blog' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('blog')}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href='#pricing'
              className={activeLink === 'pricing' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('pricing')}
            >
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <HashLink to="#connect">
              <button className="btn btn-primary">
                <span>Register Now</span>
              </button>
            </HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
