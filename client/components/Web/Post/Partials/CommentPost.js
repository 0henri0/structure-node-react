import { Comment, Avatar, Form, Button, List, Input, message } from 'antd';
import moment from 'moment';
import { getComment, postComment } from '../../../../api/posts';
import Cookies from 'js-cookie';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);


class CommentPost extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  fetch = (idPost) => {
    getComment(idPost)
      .then(res => {
        this.setState({ comments : res.data });
      })
      .catch(error => {
        return error;
      });
  };

  componentDidMount() {
    this.fetch(this.props.idPost);
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Nguyen Thai ',
            avatar: 'uploads/images/avatar1.jpg',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          }
        ],
      });
    }, 500);
    let data = {
      userId:'5d9d554b2e9bf41adb4120c2',
      body: this.state.value
    }
     postComment(this.props.idPost, data).then(res => {
      message.success('comment thành công!')
     });

  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    console.log(this.state.userInfo);
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="uploads/images/avatar1.jpg"
              alt="Nguyen Thai"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default CommentPost;
