import {Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import Image  from "../components/pages/assets/Canada.png";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button  from 'react-bootstrap/Button';





export function Navbar() {
  return (
    <NavbarBs sticky='top' className="navbar shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            <img src={Image} alt="" className="siteName" />
          </Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link to="/" as={NavLink}>
          <h2 className="siteName">uOttawa Volleyball</h2>
          </Nav.Link>
        </Nav>
        <Nav className="navbar-group ms-auto">
          <Nav.Link to="/" as={NavLink}>
            <p className="nav-text">Home</p>
          </Nav.Link>
          <Nav.Link to="/Services" as={NavLink}>
            <p className="nav-text">Services</p>
          </Nav.Link>
          <Nav.Link to="/League" as={NavLink}>
            <p className="nav-text">League</p>
          </Nav.Link>
          {/* <Nav.Link to="/SignUp" as={NavLink}>
            <p className="nav-text">SignUp</p>
          </Nav.Link> */}
          <Nav.Link to="/Support" as={NavLink}>
            <p className="nav-text">Support</p>
          </Nav.Link>
          <Nav.Link >
          <Button  href='/HomeFr' variant="Info" size="sm" type="submit">
            <p className="translation" >EN/FR</p>
          </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
    
  )
}