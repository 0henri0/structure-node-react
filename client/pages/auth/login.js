import Layout from '../../components/layouts/layout';
import React from 'react';
import LoginComponent from '../../components/auth/login';
import apiLogin from '../../api/auth';
class Login extends React.Component {

  handleCheckLogin = credentials => {
    const { email, password } = credentials;

    apiLogin({
      'email': email, 
      'password': password
    })
    .then(response => {
      console.log('success');
      localStorage.setItem('access_token', response.data.access_token);
      window.location.href = '/';
    })
    .catch(error => {
      console.log('error2');
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