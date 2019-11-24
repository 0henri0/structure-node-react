import React from 'react';
import { Table, Row, Col, Icon, message } from 'antd';
import { getTags, deleteTag } from '../../../api/admin/tags';
import Link from 'next/link';

class IndexComponent extends React.Component {
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

  handleDelete = async (_id) => {
    try {
      await deleteTag(_id);
      await this.fetch({pageCurrent: (this.state.pagination.current-1)});
      message.success('Delete success!');
    } catch (error) {
      message.error('Delete Fail!');
    }

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
    getTags(params.pageCurrent)
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
        title: 'Edit',
        dataIndex: '_id',
        key: 'edit',
        render: _id =>
          <Link href="/admin/tag/[id]/edit" as={`/admin/tag/${_id}/edit`}>
              <a><Icon type="edit" theme="twoTone" style={{fontSize: '16px'}} /></a>
          </Link>
      },
      {
        title: 'Delete',
        dataIndex: '_id',
        key: 'delete',
        render: _id =>
          <Icon type="delete" theme="twoTone" onClick={() => this.handleDelete(_id)} style={{fontSize: '16px'}} />
      }
    ];

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

export default IndexComponent;
