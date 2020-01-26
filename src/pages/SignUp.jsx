import React from 'react';
import { store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import Axios from 'axios';
import Swal from 'sweetalert2';

class SignUp extends React.Component {
  handleInputDaftar = e => {
    store.setState({ [e.target.name]: e.target.value });
  };
  handleDaftar = () => {
    const self = this;
    const req = {
      method: 'post',
      url: 'https://easy.my.id/user/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: self.props.emailDaftar,
        username: self.props.usernameDaftar,
        password: self.props.passwordDaftar
      }
    };
    console.log('tes data', req.data);
    console.log('tes email', self.props.emailDaftar);
    Axios(req)
      .then(function(response) {
        Swal.fire('Daftar Sukses!', 'Silahkan Masuk', 'success');
      })
      .catch(function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Daftar Gagal',
          text: 'Pastikan semua formulir terisi'
        });
      });
  };
  render() {
    return (
      <div className="container align-item-center pr-lg-5 pl-lg-5 pt-lg-5">
        <form onSubmit={e => e.preventDefault(e)}>
          <div className="form-group row">
            <label
              for="emailinput"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Email
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                name="emailDaftar"
                onChange={e => this.handleInputDaftar(e)}
                className="form-control"
                id="emailinput"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="username" className="col-sm-4 col-form-label" style={{ color: '#ff8364' }}>
              Username
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="usernameDaftar"
                onChange={e => this.handleInputDaftar(e)}
                className="form-control"
                id="username"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inputPassword1"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                name="passwordDaftar"
                onChange={e => this.handleInputDaftar(e)}
                className="form-control"
                id="inputPassword1"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-4"></div>
            <div className="col-md-4 col-sm-12">
              <button
                type="submit"
                style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                onClick={this.handleDaftar}
                className="btn btn-block"
                data-dismiss="modal"
              >
                Daftar
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect('emailDaftar, passwordDaftar, usernameDaftar')(withRouter(SignUp));
