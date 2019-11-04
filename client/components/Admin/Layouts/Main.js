import React, { useState } from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import MyHeader from './Header';
import MyFooter from './Footer';

const { Content } = Layout;

export default function Main(props) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleToggleMenu = () => setCollapsed(!collapsed);


  return (
    <Layout>
      <Menu collapsed={collapsed} />
      <Layout>
        <MyHeader handleToggleMenu={handleToggleMenu} collapsed={collapsed} />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
