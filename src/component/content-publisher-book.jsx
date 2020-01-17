import React from 'react';
import { actions, store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

class PublisherBook extends React.Component {
  truncate = function(str) {
    return str.length > 25 ? str.substring(0, 20) + '...' : str;
  };
  render() {
    return (
      <div className="col-md-12 mb-2 border row">
        <div className="col-md-3">
          <img className="border rounded" src={this.props.image} style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <h5 style={{ fontSize: '12pt', color: '#ff8364' }}>
            {this.truncate(`${this.props.title} ${this.props.jenjang} Kelas ${this.props.grade}`)}
          </h5>

          <p>{this.props.soal} Soal</p>
        </div>
        <div className="col-md-3">
          <h6>Harga</h6>
          <h6>Rp. {this.props.price}</h6>
        </div>
      </div>
    );
  }
}
export default connect(
  'usernameProfile, emailProfile, statusPenerbit',
  actions
)(withRouter(PublisherBook));
