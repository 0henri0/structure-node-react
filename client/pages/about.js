import cowsay from 'cowsay-browser';
import Layout from '../components/layouts/layout';
import { Component, Fragment } from 'react';

class About extends Component {
  cowsayHi = () => {
    return (
      <pre>{cowsay.say({ text: 'this is about' })}</pre>
    );
  };

  xxx = () => {
    return 'thai';
  }

  render() {
    return (
      <Fragment>
        <Layout title='this is about'>
          {this.cowsayHi()}
        </Layout>
      </Fragment>
    );
  }
}

export default About;