import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Icon } from 'antd';
import Link from 'next/link';

class MyNavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="box_1620">
          <Navbar.Brand>
            <Link href="/">
              <a className="logo" href="/"><img src="/static/img/logo.png" alt="" /></a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Nav>
              <div className="icons-social">
                <Nav.Link href="#"><Icon style={{ fontSize: '18px' }} type="facebook" /></Nav.Link>
                <Nav.Link href="#"><Icon style={{ fontSize: '18px' }} type="github" /></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavBar;
