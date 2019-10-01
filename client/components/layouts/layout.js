import Head from './head';
import Header from './header';
import Footer from './footer';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/app';

const Layout = ({ children, title = 'This is the default title' }) => (
  <Fragment>
    <Head title={title} />
    <Header/>
    <div className='main'>
      {children}
    </div>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;