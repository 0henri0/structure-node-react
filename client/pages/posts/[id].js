import React from 'react';
import Layout from '../../components/layouts/layout';
import BlogArea from '../../components/commons/blogArea';
import MomentDetailComponent from '../../components/moments/momentDetailComponent';
import { getMomentDetail } from '../../api/detail';

class MomentDetail extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    return { idPost: id };
  }

  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  };

  componentDidMount() {
    getMomentDetail(this.props.idPost)
      .then(res => {
        this.setState({
          post: res.data,
        });
      })
      .catch(error => {
        return error;
      });
  }

  render() {
    const { post } = this.state;
    return (
      <Layout title='this is MomentDetail'>
        <BlogArea p='p_100'>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9 col-md-12">
              <MomentDetailComponent post={post} />
            </div>
          </div>
        </BlogArea>
      </Layout>
    );
  }
};

export default MomentDetail;