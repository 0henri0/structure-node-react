import Layout from '../../components/Web/Layouts/Main';
import React from 'react';
import LoginComponent from '../../components/Auth/login';
import apiLogin from '../../api/auth';
import Cookies from 'universal-cookie';

class Login extends React.Component {

  handleCheckLogin = credentials => {
    const { email, password } = credentials;

    apiLogin({
      'email': email,
      'password': password
    })
      .then(response => {
        const cookies = new Cookies();
        // cookies.set('access_token', response.data.token, { path: '/' });
        // cookies.set('refresh_token', response.data.refresh_token, { path: '/' });
        // cookies.set('username', response.data.username, { path: '/' });
        // cookies.set('avatar', response.data.avatar, { path: '/' });
        // windown.location.href = '/'
      })
      .catch(error => {
        return error;
      });
  }

  render() {
    return (
      <Layout title='this is Login'>
        <LoginComponent credentials={this.handleCheckLogin} />
      </Layout>
    );
  }
}

export default Login;