import React, { useState, useEffect } from 'react';
import Post from './Post';
import SpinLoading from './SpinLoading';
import { getLastestPosts } from '../../../../api/posts';
import '../../../../styles/blog_left_sidebar.less';

const BlogLeftSidebar = () => {
  const [posts, setPosts] = useState([]);
  let [statusSpin, setStatusSpin] = useState(true);
  let [page, setPages] = useState(0);

  async function fetchMyAPI() {
    let result = await getLastestPosts(page);
    let data = await result.data.posts;
    setPosts(data);
    setStatusSpin(false);
  }

  function fetchMoreData() {
    setStatusSpin(true);
    setTimeout(
      async function() {
        setPages(++page);
        let result = await getLastestPosts(page);
        let data = await result.data.posts;
        data = [...posts,...data];
        setPosts(data);
        setStatusSpin(false);
      }, 500);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);
  
  return (
    <div className="blog_left_sidebar">
      <div className="row">
        {posts.map((post, index) => {
          return (<Post post={post} key={index}/>)
        })}
      </div>
      <div className="row justify-content-md-center"> <SpinLoading fetchMoreData={fetchMoreData} status={statusSpin}/></div>
    </div>
  );
};

export default BlogLeftSidebar;
