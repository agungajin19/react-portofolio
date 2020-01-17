import React from 'react';
import { actions, store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { Link } from 'react-router-dom';

class ContentCollection extends React.Component {
  render() {
    return (
      <div className="col-md-6 border row">
        <div className="col-md-6">
          <img src={this.props.imageCollection} style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <h5>
            {this.props.titleCollection} {this.props.jenjangCollection} Kelas{' '}
            {this.props.kelasCollection}
          </h5>
          <h6>{this.props.jumlahSoal} Soal</h6>
          <p>{this.props.publisherCollection}</p>
        </div>
      </div>
    );
  }
}
export default connect('', actions)(withRouter(ContentCollection));
