import React from 'react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

const ContentCart = props => {
  return (
    <div className="col-md-12 p-0 mb-2 border row" style={{ backgroundColor: '#fffafa' }}>
      <div className="col-md-3">
        <img src={props.imageCart} alt="" style={{ width: '100%' }} />
      </div>
      <div className="col-md-5">
        <h5>{props.titleCart}</h5>
        <p>{props.publisherCart}</p>
      </div>
      <div className="col-md-2">
        <h6>Harga</h6>
        <h6>Rp. {props.priceCart}</h6>
      </div>
      <div className="col-md-2">
        <button
          type="button"
          class="close"
          onClick={() => props.handleDelete(props.idCart)}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};
export default connect('', actions)(withRouter(ContentCart));
