import React from 'react';

import '../../../styles/blog_post_detail.less';

export default function PostDetailPage() {
  return (
    <div className="main_blog_details">
      <img className="img-fluid" src="/static/img/blog/news-blog.jpg" alt="" />
      <a href="#"><h4>Cartridge Is Better Than Ever <br /> A Discount Toner</h4></a>
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
      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.</p>
      <blockquote className="blockquote">
        <p className="mb-0">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
      </blockquote>
      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
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
