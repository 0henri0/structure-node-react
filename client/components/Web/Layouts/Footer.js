import React from 'react';
import { Row, Col, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import '../../../styles/footer.less';

export default function FooterPage() {
  return (
    <Footer style={{padding: 0}}>
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>BKFA Blog</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design">
                    GitHub
                  </a>
                </div>
                <div>
                  <a href="http://pro.ant.design">Facebook</a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Profile</a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Blog bạn bè</h2>
                <div>
                  <a href="http://scaffold.ant.design">ABC Blog</a>
                  <span> -  Chia sẻ về công nghệ </span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">vlxxx</a>
                  <span> - Chia sẻ video </span>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Help</h2>
                <div>
                  <a href="/changelog">
                    Change Log
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ">
                    GitHub
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                    Chat Room (English)
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                  More About Us
                </h2>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">Mục đích</a>
                  <span> - Chia sẻ, chia sẻ và chia sẻ ...</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Slogan</a>
                  <span> - Thất bại không phải là ngõ cụt!</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col md={4} sm={24} />
          <Col md={20} sm={24}>
            <span style={{ marginRight: 12 }}>Personal Blog</span>
            <span style={{ marginRight: 12 }}>Copyright © BKFA</span>
          </Col>
        </Row>
      </footer>
    </Footer>
  );
}
