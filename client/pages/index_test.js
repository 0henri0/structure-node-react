import Layout from '../components/layouts/layout';
import React from 'react';
import BlogArea from '../components/commons/blogArea';
import ListMoment from '../components/home/listMoment';
import BlogRightSidebar from '../components/commons/blogRightSidebar';
import Pagination from '../components/commons/pagination';

class Index extends React.Component {
  render() {
    return (
      <Layout title='This Is Home'>
        <BlogArea>
          <div className="row">
            <div className="col-lg-8">
              <ListMoment />
            </div>
            <div className="col-lg-4">
              <BlogRightSidebar />
            </div>
          </div>
          <Pagination />
        </BlogArea>
      </Layout>
    );
  }
}

export default Index;
