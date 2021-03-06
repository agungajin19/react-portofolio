import React from 'react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

const ContentCollection = props => {
  return (
    <div className="col-md-6 border row">
      <div className="col-md-6">
        <img src={props.imageCollection} alt="book" style={{ width: '100%' }} />
      </div>
      <div className="col-md-6">
        <h5>
          {props.titleCollection} {props.jenjangCollection} Kelas{' '}
          {props.kelasCollection}
        </h5>
        <h6>{props.jumlahSoal} Soal</h6>
        <p>{props.publisherCollection}</p>
      </div>
    </div>
  );
};
export default connect('', actions)(withRouter(ContentCollection));
