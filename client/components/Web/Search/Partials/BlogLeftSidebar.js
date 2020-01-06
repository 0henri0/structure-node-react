import React, { useState, useEffect } from 'react';
import Post from './Post';
import { getSearchPosts } from '../../../../api/posts';
import '../../../../styles/blog_left_sidebar.less';
import { useRouter } from 'next/router'

const BlogLeftSidebar = ({query}) => {
  const router = useRouter()
  const [posts, setPosts] = useState([]);
  let [page, setPages] = useState(0);
  async function fetchMyAPI() {
    let result = await getSearchPosts(router.query.key);
    console.log(result);
    let data = await result.data || [];
    setPosts(data);
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
    </div>
  );
};

export default BlogLeftSidebar;
