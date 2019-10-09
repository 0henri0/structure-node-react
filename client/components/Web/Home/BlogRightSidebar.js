import React from 'react';
import { Icon } from 'antd';

import '../../../styles/blog_right_sidebar.less';

const BlogRightSidebar = () => {
  return (
    <div className="blog_right_sidebar">
      <aside className="single_sidebar_widget search_widget">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search Posts" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"><Icon type="search" /></button>
          </span>
        </div>
        <div className="br" />
      </aside>
      <aside className="single_sidebar_widget author_widget">
        <img className="author_img img-fluid" src="/static/img/blog/author.png" alt="" />
        <h4>Charlie Barber</h4>
        <p>Senior blog writer</p>
        <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
        <div className="social_icon">
          <Icon type="facebook" />
        </div>
        <div className="br" />
      </aside>
      <aside className="single_sidebar_widget popular_post_widget">
        <h3 className="widget_title">Popular Posts</h3>
        <div className="media post_item">
          <img src="/static/img/blog/popular-post/post1.jpg" alt="post" />
          <div className="media-body">
            <a href="blog-details.html"><h3>Space The Final Frontier</h3></a>
            <p>02 Hours ago</p>
          </div>
        </div>
        <div className="media post_item">
          <img src="/static/img/blog/popular-post/post2.jpg" alt="post" />
          <div className="media-body">
            <a href="blog-details.html"><h3>The Amazing Hubble</h3></a>
            <p>02 Hours ago</p>
          </div>
        </div>
        <div className="media post_item">
          <img src="/static/img/blog/popular-post/post3.jpg" alt="post" />
          <div className="media-body">
            <a href="blog-details.html"><h3>Astronomy Or Astrology</h3></a>
            <p>03 Hours ago</p>
          </div>
        </div>
        <div className="media post_item">
          <img src="/static/img/blog/popular-post/post4.jpg" alt="post" />
          <div className="media-body">
            <a href="blog-details.html"><h3>Asteroids telescope</h3></a>
            <p>01 Hours ago</p>
          </div>
        </div>
        <div className="br" />
      </aside>
      <aside className="single_sidebar_widget post_category_widget">
        <h4 className="widget_title">Post Catgories</h4>
        <ul className="list cat-list">
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Technology</p>
              <p>37</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Lifestyle</p>
              <p>24</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Fashion</p>
              <p>59</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Art</p>
              <p>29</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Food</p>
              <p>15</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Architecture</p>
              <p>09</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Adventure</p>
              <p>44</p>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default BlogRightSidebar;
