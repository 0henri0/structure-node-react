import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import IndexComponent from '../../../components/Admin/Posts/IndexComponent';

class IndexCategories extends React.Component {
  render() {
    const CREATE_LINK = '/admin/posts/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <IndexComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexCategories;
