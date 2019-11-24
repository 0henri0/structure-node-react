import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BlogRightSidebar from '../Partials/BlogRightSiderbar/BlogRightSidebar';
import PostDetailPage from './Partials/PostDetailPage';
import { getDetail } from '../../../api/posts';
import '../../../styles/detail_post.less';

export default function HomePage({ idPost }) {
  console.log(idPost);
  const [postDetail, setpostDetail] = useState([]);

  async function fetchMyAPI() {
    let result = await getDetail(idPost);
    let post = await result.data;
    setpostDetail(post);
  }
  useEffect(() => {
    fetchMyAPI();
  }, [])

  return (
    <Container>
      <Row>
        <Col lg={8} className="content_detail_post">
        <PostDetailPage postDetail={postDetail}/>
        </Col>
        <Col lg={4}>
          <BlogRightSidebar />
        </Col>
      </Row>
    </Container>
  );
}
