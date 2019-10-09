import Link from 'next/link'

const Moment = ({ post }) => {
  return (
    <article className="blog_style_2108">
      <div className="blog_img">
        <Link href="/posts/[id]" as={`/posts/${post['_id']}`}><a className="logo" ><img className="img-fluid" src={post['image_title']} alt="" /></a></Link>
      </div>
      <div className="blog_text">
        <div className="blog_text_inner">
          <div className="cat">
            <a className="cat_btn" href="#">Gadgets</a>
            <a href="#"><i className="fa fa-calendar" aria-hidden="true" /> March 14, 2018</a>
            <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 05</a>
          </div>
          <p>{post['content'].substring(0, 100)}</p>
          <Link href="/posts/[id]" as={`/posts/${post['_id']}`}><a className="blog_btn">Read More</a></Link>
        </div>
      </div>
    </article>
  );
};

export default Moment;
