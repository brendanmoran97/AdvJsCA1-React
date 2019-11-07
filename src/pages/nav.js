/**
 * @Date:   2019-10-21T16:12:46+01:00
 * @Last modified time: 2019-11-07T11:24:04+00:00
 */
 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 import {Link} from 'react-router-dom';
 import Nav from 'react-bootstrap/Nav';
 import { Navbar } from 'react-bootstrap';

 class NavBar extends React.Component {
    render(){
      return(
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand ><Link className = "otherNav" to="/">Rick & Morty</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Item><Link className = "smallerOtherNav space" to="/characters">Character Guide</Link></Nav.Item>
                      <Nav.Item><Link className = "smallerOtherNav space" to="/episodes">Episode Guide</Link></Nav.Item>
                    </Nav>
                    <Nav>
                      <Nav.Item><Link className = "smallerOtherNav space" to="/brendanMoran">Brendan Moran</Link></Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
      );
    }
  }

  export default NavBar;
