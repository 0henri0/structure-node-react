import cowsay from 'cowsay-browser';
import Layout from '../components/layouts/layout';

const cowsayHi = () => {
  return (
    <pre>{cowsay.say({ text: 'this is Contact' })}</pre>
  );
};
const Contact = () => {
  return (
    <Layout title='this is Contact'>
      {cowsayHi()}
    </Layout>
  );
};

export default Contact;
