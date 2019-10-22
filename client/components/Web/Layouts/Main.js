import React from 'react';
import PropTypes from 'prop-types';
import MyHeader from './Header';
import MyFooter from './Footer';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Main(props) {
  const { path, children, pageTitle, ogImage } = props;

  return (
    <Layout style={{minHeight: '100vh'}}>
      <MyHeader path={path} pageTitle={pageTitle} ogImage={ogImage} />
      <Content><main className='main-content'>{children}</main></Content>
      <MyFooter />
    </Layout>
  );
}

Main.propTypes = {
  children: PropTypes.any.isRequired,
};
