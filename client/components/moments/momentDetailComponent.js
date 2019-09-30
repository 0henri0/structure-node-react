const MomentDetailComponent = ({ post }) => {
  return (
    <>
      <div className="main_blog_details">
        <img className="img-fluid" src={post.image_title} alt="" />
        <a href="#"><h4>{post.title}</h4></a>
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
        <div className="content-post">
          {post.content}
        </div>
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
      <div className="comments-area">
        <div className="comment-form">
          <form>
            <div className="form-group">
              <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" />
            </div>
            <a href="#" className="primary-btn submit_btn">Post Comment</a>
          </form>
        </div>
        <div className="comment-list">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="/static/img/blog/c1.jpg" alt="" />
              </div>
              <div className="desc">
                <h5><a href="#">Emilly Blunt</a></h5>
                <p className="date">December 4, 2017 at 3:12 pm </p>
                <p className="comment">
                  Never say goodbye till the end comes!
            </p>
              </div>
            </div>
            <div className="reply-btn">
              <a href className="btn-reply text-uppercase">reply</a>
            </div>
          </div>
        </div>
        <div className="comment-list left-padding">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="/static/img/blog/c2.jpg" alt="" />
              </div>
              <div className="desc">
                <h5><a href="#">Elsie Cunningham</a></h5>
                <p className="date">December 4, 2017 at 3:12 pm </p>
                <p className="comment">
                  Never say goodbye till the end comes!
            </p>
              </div>
            </div>
            <div className="reply-btn">
              <a href className="btn-reply text-uppercase">reply</a>
            </div>
          </div>
        </div>
        <div className="comment-list left-padding">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="/static/img/blog/c3.jpg" alt="" />
              </div>
              <div className="desc">
                <h5><a href="#">Annie Stephens</a></h5>
                <p className="date">December 4, 2017 at 3:12 pm </p>
                <p className="comment">
                  Never say goodbye till the end comes!
            </p>
              </div>
            </div>
            <div className="reply-btn">
              <a href className="btn-reply text-uppercase">reply</a>
            </div>
          </div>
        </div>

        <div className="comment-list">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="/static/img/blog/c4.jpg" alt="" />
              </div>
              <div className="desc">
                <h5><a href="#">Maria Luna</a></h5>
                <p className="date">December 4, 2017 at 3:12 pm </p>
                <p className="comment">
                  Never say goodbye till the end comes!
            </p>
              </div>
            </div>
            <div className="reply-btn">
              <a href className="btn-reply text-uppercase">reply</a>
            </div>
          </div>
        </div>
        <div className="comment-list">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="/static/img/blog/c5.jpg" alt="" />
              </div>
              <div className="desc">
                <h5><a href="#">Ina Hayes</a></h5>
                <p className="date">December 4, 2017 at 3:12 pm </p>
                <p className="comment">
                  Never say goodbye till the end comes!
            </p>
              </div>
            </div>
            <div className="reply-btn">
              <a href className="btn-reply text-uppercase">reply</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MomentDetailComponent;