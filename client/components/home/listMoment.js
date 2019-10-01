import React, { useState, useEffect } from 'react';
import Moment from './moment';
import { map } from 'lodash';
import { getMoments } from '../../api/home';

class ListMomment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    getMoments(0)
      .then(res => {
        this.setState({
          posts: res.data,
        });
      })
      .catch(error => {
        return error;
      });
  }
  render() {
    const { postHome } = this.state.posts;

    return (
      <div className="blog_left_sidebar">
        {map(postHome, function (post, index) {
          return  <Moment post={post} key={index}/>
        })
        }
      </div>
    );
  }
}

export default ListMomment;