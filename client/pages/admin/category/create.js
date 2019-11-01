import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import CreateCategoryComponent from '../../../components/Admin/Categories/CreateCategoryComponent';

class IndexCategories extends React.Component {
  render() {
    return (
      <LayoutAdmin>
        <CreateCategoryComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexCategories;
