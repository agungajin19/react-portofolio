import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

class Footer extends React.Component {
  render() {
    return (
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>About Us</h2>
              <p className="pr-5 text-white-50">
                Kami memberikan akses untuk para siswa mendapatkan soal - soal latihan dalam
                meningkatkan kompetensinya masing - masing.
              </p>
            </div>

            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>Jalan Raya Tidar no. 23</p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3"></i>(541) 754-3010
              </p>
              <p>
                <i className="fa fa-envelope-o mr-3"></i>info@easy.com
              </p>
            </div>

            <div className="col-lg-3 col-xs-12 links">
              <Link
                to="/"
                classNameName="navbar-brand pl-2 "
                style={{ color: '#ff4d4d', fontWeight: '700', fontSize: '15pt' }}
                onClick={() => this.props.homeBack('')}
              >
                <img
                  src={require('../image/logo.png')}
                  alt="logo"
                  width="70%"
                  onClick={() => this.props.homeBack('')}
                />
                easy.com
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">© 2019. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect('', actions)(withRouter(Footer));
