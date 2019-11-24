
import React from 'react';
import { Table, Avatar, Icon } from 'antd';
import LayoutAdmin from '../../components/admin/layouts/layout';
import { getUsers } from '../../api/admin/users';

const columns = [
  {
    title: '_id',
    dataIndex: '_id',
    width: '15%',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    width: '15%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: '25%',
  },
  {
    title: 'Title Image',
    dataIndex: 'avatar',
    render: text => <Avatar shape="square" size={64} src={text} />,
  },
  {
    title: 'Status',
    dataIndex: 'deleteAt',
    render: value => {
      if (value) {

        return <Icon style={{ fontSize: '16px' }} theme="twoTone" type="close-circle" twoToneColor="#eb2f96" />
      }

      return <Icon style={{ fontSize: '16px' }} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
    }
  }
];

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pagination: {},
      loading: false,
    }
  }

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
    getUsers(params.pageCurrent)
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

export default Posts;
