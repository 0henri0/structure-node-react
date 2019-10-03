
import React from 'react';
import { Table, Avatar, Icon } from 'antd';
import LayoutAdmin from '../../components/admin/layouts/layout';
import { getCategories } from '../../api/admin/categories';

const columns = [
  {
    title: '_id',
    dataIndex: '_id',
    width: '15%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: text => <Avatar shape="square" size={64} src={text} />,
  }
];

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pagination: {},
      loading: false,
    }
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({ pageCurrent: (pagination.current - 1) });
  };

  fetch = ({ ...params }) => {

    this.setState({ loading: true });
    getCategories(params.pageCurrent)
      .then(res => {
        const pagination = { ...this.state.pagination };
        pagination.total = res.data.count;
        this.setState({
          loading: false,
          data: res.data.data,
          pagination,
        });
      })
      .catch(error => {
        return error;
      });
  };

  render() {
    return (
      <LayoutAdmin>
        <Table
          columns={columns}
          dataSource={this.state.data}
          rowKey={record => record._id}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </LayoutAdmin>
    );
  }
}

export default Categories;
