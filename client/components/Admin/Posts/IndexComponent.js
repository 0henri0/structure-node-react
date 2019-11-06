import React from 'react';
import { Table, Avatar, Row, Col, Icon, message } from 'antd';
import { getPosts, deletePost } from '../../../api/admin/posts';
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
      await deletePost(_id);
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
    getPosts(params.pageCurrent)
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
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '15%',
      },
      {
        title: 'Image',
        dataIndex: 'image_title',
        key: 'image',
        width: '10%',
        render: text => <Avatar shape="square" size={64} src={text} />,
      },
      {
        title: 'Content',
        dataIndex: 'content',
        render: text => <p>{text.substr(0, 50)}...</p>,
        width: '30%',
      },
      {
      title: 'Draft',
      dataIndex: 'draft',
      render: value => {
        if (value) {
          return <Icon style={{ fontSize: '16px' }} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
        }

        return <Icon style={{ fontSize: '16px' }} theme="twoTone" type="close-circle" twoToneColor="#eb2f96" />
      }
      },
      {
        title: 'Edit',
        dataIndex: '_id',
        key: 'edit',
        render: _id =>
          <Link href="/admin/category/[id]/edit" as={`/admin/category/${_id}/edit`}>
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
