import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import CreateComponent from '../../../components/Admin/Posts/CreateComponent';

class CreateCategory extends React.Component {
  render() {
    const CREATE_LINK = '/admin/posts/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <CreateComponent />
      </LayoutAdmin>
    );
  }
}

export default CreateCategory;
