import { NavDropdown, Container, Nav, Navbar, Button, ButtonGroup, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import useLogin from '../hooks/useLogin';
import logo from '../img/logo1.jpg';
import Home from "../pages/Home";

function NavbarBS() {

  const [user, setUser] = useState();

  const loadLogin = useLogin();
let navigate = useNavigate();
  useEffect(() => {
    setUser(loadLogin);
  }, [loadLogin]);

  const handleLogout = () => {
    setUser("");
    localStorage.clear();
    navigate("/")
  };

  const authButton = () => {
    if (user === null || user === "") {
      return (
        <ButtonGroup>
          <Button variant="secondary" as={Link} to="/login">Login</Button>
          <Button variant="secondary" as={Link} to="/adduser">Signup</Button>
        </ButtonGroup>
      )
    } else {
      return <Button variant="secondary" onClick={handleLogout}>Logout</Button>
    }
  }

  const loginMenu = () => {
    if (user === null || user === "") {
      return (
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Menu"
          menuVariant="dark"
          align="end"
        >
          <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/adduser">Create Account</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/login">Log In</NavDropdown.Item>
        </NavDropdown>
      )
    } else {
      return <NavDropdown
        id="nav-dropdown-dark-example"
        title="Menu"
        menuVariant="dark"
        align="end"
      >
        <NavDropdown.Item as={Link} to="/viewuser">View Your Details</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/edituser">Edit Your Details</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/userhomepage">User Home Page</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/createhike">Find a Hike</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/allhikes">View Your Hikes</NavDropdown.Item>
      </NavDropdown>
    }
  }

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='navbar-logo' as={Link} to="/"><img src={logo} alt="logo.jpg"></img>Pathfinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Text>{user}</Navbar.Text>
        <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
          <Form inline className="mx-3">
            {authButton()}
          </Form>
          <Nav>
            {loginMenu()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;