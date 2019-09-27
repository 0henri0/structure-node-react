import React, { useState, useEffect } from 'react';
import Moment from './moment';
import { map } from 'lodash';
import getMoments from '../../api/home';

class ListMomment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: {}
    };
  }

  componentDidMount() {
    getMoments()
      .then(res => {
        this.setState({
          moments: res.data.mometsArray,
        });
      })
      .catch(error => {
        return error;
      });
  }
  render() {
    const { moments } = this.state;
    return (
      <div className="blog_left_sidebar">
        {map(moments, function (moment, index) {
          return  <Moment id={index} key={index} src={moment.url_image} />
        })
        }
      </div>
    );
  }
}

export default ListMomment;