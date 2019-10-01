import Head from 'next/head';
import PropTypes from 'prop-types';

const HeadApp = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="icon" href="/static/img/favicon.png" type="image/png"></link>
      {/* <link rel="stylesheet" href="/static/css/bootstrap.css" /> */}
      <link rel="stylesheet" href="/static/vendors/linericon/style.css" />
      <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/static/vendors/lightbox/simpleLightbox.css" />
      <link rel="stylesheet" href="/static/vendors/nice-select/css/nice-select.css" />
      <link rel="stylesheet" href="/static/vendors/animate-css/animate.css" />
      <link rel="stylesheet" href="/static/vendors/jquery-ui/jquery-ui.css" />
      <link rel="stylesheet" href="/static/css/style.css" />
      <link rel="stylesheet" href="/static/css/responsive.css" />
    </Head>
  );
};

HeadApp.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeadApp;

