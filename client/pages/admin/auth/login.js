import Layout from '../../../components/Web/Layouts/Main';
import React from 'react';
import LoginComponent from '../../../components/Auth/login';
import apiLogin from '../../../api/admin/auth';

class Login extends React.Component {

  handleCheckLogin = credentials => {
    const { email, password } = credentials;

    apiLogin({
      'email': email,
      'password': password
    })
      .then(response => {
        // window.location.href = '/admin/index'
      })
      .catch(error => {
        console.log(error);
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