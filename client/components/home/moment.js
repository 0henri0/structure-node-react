import { useRouter } from 'next/router';
import Link from 'next/link'

const Moment = ({id, src}) => {
    return(
      <article className="blog_style_2108">
        <div className="blog_img">
        <Link href="/moments/[id]" as={`/moments/${id}`}><a className="logo" ><img className="img-fluid" src={src} alt="" /></a></Link>
        </div>
        <div className="blog_text">
          <div className="blog_text_inner">
            <div className="cat">
              <a className="cat_btn" href="#">Gadgets</a>
              <a href="#"><i className="fa fa-calendar" aria-hidden="true" /> March 14, 2018</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 05</a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <a className="blog_btn" href="#">Read More</a>
          </div>
        </div>
      </article>
    );
};

export default Moment;