import React from 'react';
import Axios from 'axios';
import { store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import Swal from 'sweetalert2';

class SignIn extends React.Component {
  handleMasukan = e => {
    store.setState({ [e.target.name]: e.target.value });
  };
  handleLogin = () => {
    const self = this;
    const req = {
      method: 'post',
      url: 'https://easy.my.id/user/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        username: self.props.username,
        password: self.props.password
      }
    };
    Axios(req)
      .then(function(response) {
        if (response.data.hasOwnProperty('token')) {
          localStorage.setItem('username', self.props.username);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('status_login', true);
          if (self.props.username === 'internal') {
            self.props.history.push('/Profile');
          } else {
            self.props.history.push('/');
          }
        }
        Swal.fire('Login Sukses!', `Selamat Datang ${self.props.username}`, 'success');
      })
      .catch(function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: 'username atau password tidak sesuai'
        });
      });
  };

  render() {
    return (
      <div className="container align-item-center pr-0">
        <form onSubmit={e => e.preventDefault(e)}>
          <div className="form-group row">
            <label for="username" className="col-sm-4 col-form-label" style={{ color: '#ff8364' }}>
              Username
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="username"
                onChange={e => this.handleMasukan(e)}
                className="form-control"
                id="username"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="password" className="col-sm-4 col-form-label" style={{ color: '#ff8364' }}>
              Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                name="password"
                onChange={e => this.handleMasukan(e)}
                className="form-control"
                id="password"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-4"></div>
            <div className="col-md-4 col-sm-12">
              <button
                type="submit"
                onClick={this.handleLogin}
                className="btn btn-block"
                data-dismiss="modal"
                style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
              >
                Masuk
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect('password, username')(withRouter(SignIn));
