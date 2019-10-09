const banner = () =>{
  return (
    <section className="banner_area">
      <div className="container">
        <div className="row banner_inner">
          <div className="col-lg-5" />
          <div className="col-lg-7">
            <div className="banner_content text-center">
              <h2>Blog Post Details</h2>
              <div className="page_link">
                <a href="index.html">Home</a>
                <a href="single-blog.html">Post Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;