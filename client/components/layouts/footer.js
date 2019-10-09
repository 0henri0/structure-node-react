const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6 className="footer_title">About Us</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6 className="footer_title">Newsletter</h6>
              <p>Stay updated with our latest trends</p>
              <div id="mc_embed_signup">
                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative">
                  <div className="input-group d-flex flex-row">
                    <input name="EMAIL" placeholder="Email Address" classrequired="true" type="email" />
                    <button className="btn sub-btn"><span className="lnr lnr-arrow-right" /></button>
                  </div>
                  <div className="mt-10 info" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget instafeed">
              <h6 className="footer_title">Instagram Feed</h6>
              <ul className="list instafeed d-flex flex-wrap">
                <li><img src="/static/img/instagram/Image-01.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-02.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-03.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-04.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-05.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-06.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-07.jpg" alt="" /></li>
                <li><img src="/static/img/instagram/Image-08.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget f_social_wd">
              <h6 className="footer_title">Follow Us</h6>
              <p>Let us be social</p>
              <div className="f_social">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-dribbble" /></a>
                <a href="#"><i className="fa fa-behance" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom d-flex justify-content-between align-items-center">
          <p className="col-lg-12 footer-text text-center text-light">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;