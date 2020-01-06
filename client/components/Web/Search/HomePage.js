import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BlogRightSidebar from '../Partials/BlogRightSiderbar/BlogRightSidebar';
import BlogLeftSidebar from './Partials/BlogLeftSidebar';

export default function HomePage(props) {

  return (
    <Container>
      <Row>
        <Col lg={8}>
        <BlogLeftSidebar />
        </Col>
        <Col lg={4}>
          <BlogRightSidebar />
        </Col>
      </Row>
    </Container>
  );
}
