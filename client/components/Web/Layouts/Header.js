import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from './Head';
import MyNavBar from './NavBar';

import '../../../styles/header.less';

const MyHeader = (props) => {
  const { path, pageTitle, ogImage } = props;

  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} path={path} />
      <header className="header_area">
        <div className="main_menu">
          <MyNavBar />
        </div>
        <div className="logo_part">
          <div className="container">
            <Link href="/">
              <a className="logo" href="/"><img src="/static/img/logo.png" alt="" /></a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

MyHeader.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
}

export default MyHeader;
