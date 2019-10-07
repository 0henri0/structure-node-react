
import React from 'react';
import { Table, Avatar, Icon, Row, Col } from 'antd';
import LayoutAdmin from '../../components/admin/layouts/layout';
import { getPosts } from '../../api/admin/posts';
import CreatePost from '../../components/admin/posts/createPost';

const columns = [
  {
    title: '_id',
    dataIndex: '_id',
    width: '15%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    width: '15%',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    render: text => <p>{text.substr(0, 50)}...</p>,
    width: '25%',
  },
  {
    title: 'Title Image',
    dataIndex: 'image_title',
    render: text => <Avatar shape="square" size={64} src={text} />,
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
    getPosts(params.pageCurrent)
      .then(res => {
        const pagination = { ...this.state.pagination };
        pagination.total = res.data.count;
        console.log(1);
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
        <Row type="flex" justify="end" style={{ marginBottom: 20 }}>
          <Col span={1}>
            <CreatePost />
          </Col>
        </Row>
        
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
