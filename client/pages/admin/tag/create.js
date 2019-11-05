import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import CreateComponent from '../../../components/Admin/Tags/CreateComponent';

class CreateTag extends React.Component {
  render() {
    const CREATE_LINK = '/admin/tag/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <CreateComponent />
      </LayoutAdmin>
    );
  }
}

export default CreateTag;
