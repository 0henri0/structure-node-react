import React from 'react';
import { Layout, Icon, Row, Col, Button } from 'antd';
import * as actions from '../../../modules/admin/actions';
import { connect } from 'react-redux';
const { Header } = Layout;

class MyHeader extends React.Component {
  render() {
    const { handleToggleMenu, collapsed } = this.props;

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
            <Button type="danger">Cteate</Button>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default MyHeader;
