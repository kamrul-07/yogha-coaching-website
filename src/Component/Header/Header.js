import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLeaf} from '@fortawesome/free-solid-svg-icons'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'





const Header = () => {
    const element = <FontAwesomeIcon icon={faLeaf} />


    return (
         
             <div className="p-3 ">
                 <Navbar   bg="dark"  expand="lg">
  <Container fluid>
    <span className="font-style">{element} <h5>RelaXa</h5> </span>
    
    <Navbar.Toggle aria-controls="navbarScroll " />
    <Navbar.Collapse  id="navbarScroll">
    <Nav
        className="me-auto my-2 my-lg-0 fs-5 ms-3 bg"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link}  to={"/home"} className=" text-white" >Home</Nav.Link>
        <Nav.Link as={Link}  to={"/moreservices"} className=" text-white" >More Services</Nav.Link>
        
        <Nav.Link  as={Link} to={"/gallary"} className=" text-white">Gallery</Nav.Link>
        <Nav.Link  as={Link} to={"/about"} className=" text-white">About Us</Nav.Link>
        <Nav.Link  as={Link} to={"/login"} className=" text-white">Log In</Nav.Link>
        <Nav.Link  as={Link} to={"/singup"} className=" text-white"><i className="fas fa-sign-in-alt"></i> Sign up</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2  "
          aria-label="Search"
        />
        <Button className="bg-warning rounded" variant="outline-success ">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
             </div>
    
                
         
        
    );
};

export default Header;