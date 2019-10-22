import moment from 'moment';

const PopularPost = ({post}) => {
  return (
    <>
      <div className="media post_item">
        <img src={post.image_title} alt="post" />
        <div className="media-body">
          <a href="blog-details.html"><h3>{post.title}</h3></a>
          <p>{moment(post.updatedAt, "YYYYMMDD").fromNow()}</p>
        </div>
      </div>
      <div className="br" />
    </>
  );
}

export default PopularPost;