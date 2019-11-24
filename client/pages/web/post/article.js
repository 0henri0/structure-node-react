import React from 'react';
import Main from '../../../components/Web/Layouts/Main';
import PostDetailMain from '../../../components/Web/Post/PostDetailMain';

class Article extends React.Component {
  static async getInitialProps({ query }) {
    const idPost = query.slug;

    return { idPost };
  }
  render() {
    return (
      <Main pageTitle='this is article'>
        <PostDetailMain idPost={this.props.idPost}/>
      </Main>
    );
  }
}

export default Article;
