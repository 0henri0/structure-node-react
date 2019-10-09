import React from 'react';
import PropTypes from 'prop-types';
import MyHeader from './Header';
import MyFooter from './Footer';

export default function Main(props) {
  const { path, children, pageTitle, ogImage } = props;

  return (
    <section className='layout'>
      <MyHeader path={path} pageTitle={pageTitle} ogImage={ogImage} />
      <main className='main-content'>{children}</main>
      <MyFooter />
    </section>
  );
}

Main.propTypes = {
  children: PropTypes.any.isRequired,
};
