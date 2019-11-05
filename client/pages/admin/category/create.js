import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import CreateCategoryComponent from '../../../components/Admin/Categories/CreateComponent';

class CreateCategory extends React.Component {
  render() {
    const CREATE_LINK = '/admin/category/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <CreateCategoryComponent />
      </LayoutAdmin>
    );
  }
}

export default CreateCategory;
