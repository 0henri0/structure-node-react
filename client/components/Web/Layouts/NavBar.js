import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Icon } from 'antd';
import ActiveLink from '../../Common/ActiveLink';
import { Link } from '../../../routes/routes';
import { useRouter } from 'next/router';

class MyNavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container className="box_1620">
          <Navbar.Brand>
            <Link href="/">
              <a className="logo" href="/"><img src="/static/img/logo.png" alt="" /></a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ActiveLink route='/'>Home</ActiveLink>
              <ActiveLink route='/about'>About</ActiveLink>
              <ActiveLink route='/contact'>Contact</ActiveLink>
            </Nav>
            <Link route='/login'><Button variant="outline-success">Login</Button></Link>
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
