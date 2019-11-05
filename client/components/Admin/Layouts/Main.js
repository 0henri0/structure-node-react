import React, { useState } from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import MyHeader from './Header';
import Router from 'next/router';

const { Content } = Layout;

export default function Main(props) {
  const { children, createLink } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleMenu = () => setCollapsed(!collapsed);

  const handleCreateLink = () => {
    Router.push(createLink);
  }

  return (
    <Layout>
      <Menu collapsed={collapsed} />
      <Layout>
        <MyHeader handleToggleMenu={handleToggleMenu} collapsed={collapsed} handleCreateLink={handleCreateLink}/>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
