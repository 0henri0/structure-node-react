import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BlogLeftSidebar from './BlogLeftSidebar';
import BlogRightSidebar from './BlogRightSidebar';

export default function HomePage() {
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
