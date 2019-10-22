import React, { useEffect, useState } from 'react';
import { Icon } from 'antd';
import { getPopularPosts } from '../../../../api/posts';
import { getTagsRightsiderBar } from '../../../../api/tags';
import { getCategoriesRightSiderBar } from '../../../../api/categories';
import PopularPosts from './PopularPosts';
import Categories from './Categories';
import Tags from './Tags';
import '../../../../styles/blog_right_sidebar.less';

const BlogRightSidebar = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchMyAPI() {
      let postsRaw = await getPopularPosts();
      let tagsRaw = await getTagsRightsiderBar();
      let caegoriesRaw = await getCategoriesRightSiderBar();
      let data = {};
      data['posts'] = await postsRaw.data.posts;
      data['tags'] = await tagsRaw.data.tags;
      data['categories'] = await caegoriesRaw.data.categories;
      setPosts(data.posts);
      setTags(data.tags);
      setCategories(data.categories);
      console.log(data);
  }
  useEffect(() => {
    fetchMyAPI();
  }, []);

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
        {posts.map((post, index) => {
          return <PopularPosts post={post} key={index} />
        })}
      </aside>

      <aside className="single_sidebar_widget post_category_widget">
        <h4 className="widget_title">Post Catgories</h4>
        <ul className="list cat-list">
          {categories.map((category, index) => {
            return <Categories category={category} key={index} />
            }
          )}
        </ul>
        <div className="br" />
      </aside>

      <aside className="single-sidebar-widget tag_cloud_widget">
        <h4 className="widget_title">Tag Clouds</h4>
        <ul className="list">
          {tags.map((tag, index) => {
            return <Tags tag={tag} key={index}/>
          })}
        </ul>
      </aside>
    </div>
  );
};

export default BlogRightSidebar;
