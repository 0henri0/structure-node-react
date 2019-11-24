import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import IndexComponent from '../../../components/Admin/Tags/IndexComponent';

class IndexTags extends React.Component {
  render() {
    const CREATE_LINK = '/admin/tags/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <IndexComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexTags;
