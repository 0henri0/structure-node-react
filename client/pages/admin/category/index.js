import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import CategoryComponent from '../../../components/Admin/Categories/IndexComponent';

class IndexCategories extends React.Component {
  render() {
    const CREATE_LINK = '/admin/category/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <CategoryComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexCategories;
