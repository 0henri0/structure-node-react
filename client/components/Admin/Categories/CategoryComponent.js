import React from 'react';
import { Table, Avatar, Row, Col, Icon } from 'antd';
import { getCategories } from '../../../api/admin/categories';
import ModelCreate from './partials/ModelCreate';

const columns = [
  {
    title: '_id',
    dataIndex: '_id',
    width: '15%',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: text => <Avatar shape="square" size={64} src={text} />,
  },
  {
    title: 'Edit',
    dataIndex: '_id',
    key: 'edit',
    render: _id => <Icon type="edit" theme="twoTone" style={{fontSize: '16px'}} />
  },
  {
    title: 'Delete',
    dataIndex: '_id',
    key: 'delete',
    render: _id => <Icon type="edit" theme="twoTone" style={{fontSize: '16px'}} />
  }
];

class CategoryComponent extends React.Component {
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
      <>
      <Row>
        <Col>
          <Table
            columns={columns}
            dataSource={this.state.data}
            rowKey={record => record._id}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
        </Col>
      </Row>
      </>
    );
  }
}

export default CategoryComponent;
