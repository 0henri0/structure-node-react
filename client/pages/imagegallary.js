import Layout from '../components/layouts/layout';
import BlogArea from '../components/commons/blogArea';
import ListImageGallary from '../components/imagegallary/listImageGallary';
const ImageGallary = () => {
  return (
    <Layout title='this is Contact'>
      <BlogArea p='not-p'>
        <ListImageGallary />
      </BlogArea>
    </Layout>
  );
};

export default ImageGallary;
