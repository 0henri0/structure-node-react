import React from 'react';
import { Icon } from 'antd';
import { Link } from '../../../routes/routes';

import '../../../styles/blog_left_sidebar.less';

const BlogRightSidebar = () => {
  return (
    <div className="blog_left_sidebar">
      <article className="blog_wrap">
        <div className="blog_img">
          <img className="img-fluid" src="http://localhost:8000/img/imagegallary/1.jpg" alt="" />
        </div>
        <div className="blog_text">
          <div className="blog_text_inner">
            <div className="cat">
              <a className="cat_btn" href="#">Gadgets</a>
              <a href="#"><Icon type="calendar" /> March 14, 2018</a>
            </div>
            <Link route='post' params={{slug: 'hello-world'}}>
              <a><h4>Nest Protect: 2nd Gen Smoke + CO Alarm</h4></a>
            </Link>
            <p>
              Vào lúc 15h30 ngày 8/10, tên cướp đội mũ bảo hiểm, đeo khẩu trang đi xe máy Yamaha Exciter xông vào tiệm vàng Lương Oanh ở phường Mạo Khê, thị xã Đông Triều, Quảng Ninh. Một lúc sau, tên này xách balo chạy ra cửa nhưng làm rơi nhiều cọc tiền. Hai phụ nữ trong tiệm vàng hô hoán, chạy ra giằng được chiếc túi.
            </p>
            <Link route='post' params={{slug: 'hello-world'}}>
              <a className="blog_btn">Read More</a>
            </Link>
          </div>
        </div>
      </article>
      <div className="row">
        <div className="col-md-6">
          <article className="blog_wrap small">
            <div className="blog_img">
              <img className="img-fluid" src="/static/img/home-blog/blog-small-1.jpg" alt="" />
            </div>
            <div className="blog_text">
              <div className="blog_text_inner">
                <div className="cat">
                  <a className="cat_btn" href="#">Gadgets</a>
                  <a href="#"><Icon type="calendar" /> March 14, 2018</a>
                </div>
                <a href="single-blog.html">
                  <h4>Nest Protect 2nd Gen Smoke CO Alarm</h4>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua.</p>
                <a className="blog_btn" href="#">Read More</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="blog_wrap small">
            <div className="blog_img">
              <img className="img-fluid" src="/static/img/home-blog/blog-small-2.jpg" alt="" />
            </div>
            <div className="blog_text">
              <div className="blog_text_inner">
                <div className="cat">
                  <a className="cat_btn" href="#">Gadgets</a>
                  <a href="#"><Icon type="calendar" /> March 14, 2018</a>
                </div>
                <a href="single-blog.html">
                  <h4>Nest Protect 2nd Gen Smoke CO Alarm</h4>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua.</p>
                <a className="blog_btn" href="#">Read More</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogRightSidebar;
