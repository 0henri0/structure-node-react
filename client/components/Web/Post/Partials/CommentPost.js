import React from 'react';
import { message } from 'antd';
import Router from 'next/router';
import { postComment } from '../../../../api/posts';

class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      let data = {
            userId : 1,
            postId : Router.query.article,
            comment : this.state.value
       }
      console.log(data);
      await postComment(values);
      Router.push('/admin/tag/index');
    } catch (error) {
      message.error('Server Error!');
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="news_d_footer">
          <div className="area-comment col row">
              <div className="col-sm-10">
                <textarea style={{width: '100%'}} name="comments" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="col-sm-2">
                <input type="submit" value="Submit" />
              </div>
          </div>
          <div className="show-comment">
          </div>
        </div>
      </form>
    );
  }
}

export default CommentPost;