import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import CategoryComponent from '../../../components/Admin/Categories/CategoryComponent';

class IndexCategories extends React.Component {
  render() {
    return (
      <LayoutAdmin>
        <CategoryComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexCategories;
