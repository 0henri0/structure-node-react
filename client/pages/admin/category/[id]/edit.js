import React from 'react';
import LayoutAdmin from '../../../../components/Admin/Layouts/Main';
import EditCategoryComponent from '../../../../components/Admin/Categories/EditCategoryComponent';

class IndexCategories extends React.Component {
  render() {
    return (
      <LayoutAdmin>
        <EditCategoryComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexCategories;
