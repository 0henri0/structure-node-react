import React from 'react';
import { Row, Col } from  'react-bootstrap';
import renderHTML from 'react-render-html';
import '../../../../styles/blog_post_detail.less';
import CommentPost from './CommentPost';

export default function PostDetailPage({postDetail}) {

  return (
    <div className="main_blog_details">
    <Row>
      <Col style={{padding: 0}}> <img className="img-fluid" src={postDetail.image_title} alt="" /></Col>
    </Row>

    <Row>
      <Col>
        <h4>{postDetail.title}</h4>
        <div className="user_details">
          <div className="float-left">
            <a href="#">Lifestyle</a>
            <a href="#">Gadget</a>
          </div>
          <div className="float-right">
            <div className="media">
              <div className="media-body">
                <h5>Mark wiens</h5>
                <p>12 Dec, 2017 11:21 am</p>
              </div>
              <div className="d-flex">
                <img src="/static/img/blog/user-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
      {renderHTML(postDetail.content+'')}
      </Col>
    </Row>
    <CommentPost />
    
    
    </div>
  );
}
