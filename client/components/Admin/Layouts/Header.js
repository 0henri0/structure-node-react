import React from 'react';
import { Layout, Icon, Row, Col, Button } from 'antd';
const { Header } = Layout;

class MyHeader extends React.Component {
  render() {
    const { handleToggleMenu, collapsed, handleCreateLink } = this.props;
    return (
      <Header style={{ background: '#fff'}}>
         <Row>
         <Col span={8}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={handleToggleMenu}
          />
          </Col>
          <Col span={8} offset={8}>
            <Button type="danger" onClick={handleCreateLink}>Cteate</Button>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default MyHeader;
