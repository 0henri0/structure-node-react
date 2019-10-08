import React from 'react';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class MyHeader extends React.Component {
  render() {
    const { handleToggleMenu, collapsed } = this.props;

    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={handleToggleMenu}
        />
      </Header>
    );
  }
}

export default MyHeader;
