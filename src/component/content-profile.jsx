import React from 'react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

const ContentProfile = props => {
  return (
    <div className="text-center">
      <div>
        <img src={require('../image/profile.png')} alt="profile" style={{ width: '50%' }} />
      </div>
      <div>
        <h5>username : {props.usernameProfile}</h5>
        <h5>email : {props.emailProfile}</h5>
        {props.statusPenerbit ? <h5>penerbit: {props.penerbitProfile}</h5> : <h5></h5> }
        
      </div>
    </div>
  );
};
export default connect(
  'usernameProfile, emailProfile, statusPenerbit, penerbitProfile',
  actions
)(withRouter(ContentProfile));
