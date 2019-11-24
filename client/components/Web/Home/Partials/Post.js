import { Icon } from 'antd';
import { Link } from '../../../../routes/routes';
import moment from 'moment';

const Post = ({post}) => {
  return (
    <>
      <article className="blog_wrap">
        <div className="blog_img">
          <img className="img-fluid" src={post.image_title} alt="" />
        </div>
        <div className="blog_text">
          <div className="blog_text_inner">
            <div className="cat">
              <a className="cat_btn" href="#">Gadgets</a>
              <a href="#"><Icon type="calendar" /> {post.updatedAt ? moment(post.updatedAt).format("MM-DD-YYYY") : ''}</a>
            </div>
            <Link route='web/post/article' params={{slug: post._id ? post._id : 'undefined'}}>
              <a><h4>{post.title}</h4></a>
            </Link>
            <p>
              {post['content'] ? post['content'].substr(0, 150) : ''}
            </p>
            <Link route='web/post/article' params={{slug: post._id ? post._id : 'undefined'}}>
              <a className="blog_btn">Read More</a>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;

