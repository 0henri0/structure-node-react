import Link from 'next/link';
import ActiveLink from '../commons/activeLink';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <Navbar collapseOnSelect expand="lg">
          <div className="container box_1620">
            <a className="navbar-brand logo_h" href="/"><img src="/static/img/logo.png" alt="" /></a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <ActiveLink href="/">Home</ActiveLink>
                <ActiveLink href="/imagegallary">ImageGallary</ActiveLink>
                <ActiveLink href="/about">About</ActiveLink>
                <ActiveLink href="/contact">Contact</ActiveLink>
              </Nav>
            </Navbar.Collapse>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav">
              </ul>
              <ul className="nav navbar-nav navbar-right header_social ml-auto">
                <li className="nav-item"><a href="https://www.facebook.com/Thaii1612" target='_blank'><i className="fa fa-facebook" /></a></li>
                <li className="nav-item"><a href="https://www.youtube.com/watch?v=iDPso7C0vy4&list=PL4pGmis-Dgye_qjaaCeR0VOltmWSoBdSF" target='_blank'><i className="fa fa-youtube" /></a></li>
                <li className="nav-item"><a href="https://github.com/0henri0" target='_blank'><i className="fa fa-github" /></a></li>
              </ul>
            </div>
          </div>
        </Navbar>
      </div>
      <div className="logo_part">
        <div className="container">
          <Link href="/"><a className="logo" href="/"><img src="/static/img/logo.png" alt="" /></a></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;