import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BlogRightSidebar from '../Partials/BlogRightSidebar';

export default function HomeMain(props) {
  const { children } = props;

  return (
    <Container>
      <Row>
        <Col lg={8}>
          {children}
        </Col>
        <Col lg={4}>
          <BlogRightSidebar />
        </Col>
      </Row>
    </Container>
  );
}
