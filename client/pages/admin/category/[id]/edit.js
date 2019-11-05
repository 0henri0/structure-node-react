import React from 'react';
import LayoutAdmin from '../../../../components/Admin/Layouts/Main';
import EditCategoryComponent from '../../../../components/Admin/Categories/EditComponent';

class EditCategory extends React.Component {
  render() {
    const CREATE_LINK = '/admin/category/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <EditCategoryComponent />
      </LayoutAdmin>
    );
  }
}

export default EditCategory;
