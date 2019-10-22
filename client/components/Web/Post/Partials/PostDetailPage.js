import React from 'react';
import { Row, Col } from  'react-bootstrap';
import '../../../../styles/blog_post_detail.less';

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
        {postDetail.content}
      </Col>
    </Row>

      <div className="news_d_footer">
        <a href="#"><i className="lnr lnr lnr-heart" />Lily and 4 people like this</a>
        <a className="justify-content-center ml-auto" href="#"><i className="lnr lnr lnr-bubble" />06 Comments</a>
        <div className="news_socail ml-auto">
          <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-twitter" /></a>
          <a href="#"><i className="fa fa-youtube-play" /></a>
          <a href="#"><i className="fa fa-pinterest" /></a>
          <a href="#"><i className="fa fa-rss" /></a>
        </div>
      </div>
    </div>
  );
}
