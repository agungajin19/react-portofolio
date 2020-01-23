import React from 'react';
import { actions, store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import ModalEditBook from './modal_editbook'

class PublisherBook extends React.Component {
  truncate = function(str) {
    return str.length > 25 ? str.substring(0, 20) + '...' : str;
  };
  
  render() {
    return (
      
      <div className="col-md-12 mb-2 mx-auto border row" id={this.props.id}>
        <div className="col-md-3">
          <img
            className="border rounded"
            src={this.props.image}
            style={{ width: '100%' }}
          />
          {/* <ModalEditBook/> */}
        </div>
        <div className="col-md-6">
          <h5 style={{ fontSize: '12pt', color: '#ff8364' }}>
            {this.truncate(`${this.props.title} ${this.props.jenjang} Kelas ${this.props.grade}`)}
          </h5>

          <p>{this.props.soal} Soal</p>
        </div>
        <div className="col-md-3 p-0">
          <h6>Harga</h6>
          <h6>Rp. {this.props.price}</h6>
          <a data-toggle="modal"
            data-target="#editBook" href='#'>
            <img className='mx-0' src={require('../image/edit.png')} style={{width:'20%'}} onClick={()=>this.props.handleIdEdit(this.props.id)}/>
          </a>
        </div>
      </div>
    );
  }
}
export default connect(
  'usernameProfile, emailProfile, statusPenerbit',
  actions
)(withRouter(PublisherBook));
