import React from 'react';
import LayoutAdmin from '../../../components/Admin/Layouts/Main';
import TagComponent from '../../../components/Admin/Tags/IndexComponent';

class IndexTags extends React.Component {
  render() {
    const CREATE_LINK = '/admin/tag/create';
    return (
      <LayoutAdmin createLink={CREATE_LINK}>
        <TagComponent />
      </LayoutAdmin>
    );
  }
}

export default IndexTags;
