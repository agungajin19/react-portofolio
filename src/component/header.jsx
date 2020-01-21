import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actions, store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import '../styles/header.css';
import ModalSignin from './modal_signin';
import ModalSignup from './modal_signup';

class Header extends Component {
  handleSignOut = () => {
    // const self = this
    localStorage.setItem('status_login', false);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    store.setState({
      statusPenerbit: false,
      listLogTransaction: [],
      listPublisherBook: [],
      listCollection: [],
      listCart: [],
      usernameProfile: '',
      emailProfile: '',
      totalRevenue: 0
    });
    this.props.history.push('/');
  };
  render() {
    const statusLogin = JSON.parse(localStorage.getItem('status_login'));
    const userName = localStorage.getItem('username');
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffe8d5' }}>
          <Link
            to="/"
            className="navbar-brand pl-2 "
            style={{ color: '#ff4d4d', fontWeight: '700' }}
            onClick={() => this.props.homeBack('')}
          >
            <img
              src={require('../image/logo.png')}
              alt="logo"
              width="40px"
              onClick={() => this.props.homeBack('')}
            />
            easy.com
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navdesign" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ">
              {/* {headerKategori} */}
              <li class="nav-item">
                <Link to="/SD" class="nav-link" onClick={() => this.props.onCategory('SD')}>
                  SD
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/SMP" class="nav-link" onClick={() => this.props.onCategory('SMP')}>
                  SMP
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/SMA" class="nav-link" onClick={() => this.props.onCategory('SMA')}>
                  SMA
                </Link>
              </li>
              {statusLogin ? (
                <li>
                  <Link to="/Collection" class="nav-link">
                    Koleksi
                  </Link>
                </li>
              ) : (
                <div></div>
              )}
            </ul>

            <ul class="navbar-nav ml-lg-5">
              <li>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => this.props.prosesSearch(e)}
                  />
                </form>
              </li>
              {statusLogin ? (
                <React.Fragment>
                  <li class="nav-item">
                    <Link to="/Cart" class="nav-link">
                      <img src={require('../image/cart.png')} style={{ width: '20px' }} />
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/Profile" className="nav-link">
                      Hello, {userName} |
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" onClick={this.handleSignOut}>
                      Keluar
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      type="button"
                    >
                      Masuk
                    </a>
                    <ModalSignin />
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="modal"
                      data-target="#modalSignUp"
                      type="button"
                    >
                      Daftar
                    </a>
                    <ModalSignup />
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect('', actions)(withRouter(Header));
