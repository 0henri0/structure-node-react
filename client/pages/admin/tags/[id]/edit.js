import React from 'react';
import LayoutAdmin from '../../../../components/Admin/Layouts/Main';
import EditComponent from '../../../../components/Admin/Tags/EditComponent';

class IndexCategories extends React.Component {
  render() {
    const CREATE_LINK = '/admin/tags/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <EditComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexCategories;
