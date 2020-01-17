import React from 'react';
import AddBook from '../pages/AddBook';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

class ModalAddBook extends React.Component {
  render() {
    return (
      // <!-- Modal -->
      <div
        className="modal fade"
        id="tambahBuku"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ backgroundColor: '#ffe8d5' }}>
            <div className="modal-header text-center" style={{ backgroundColor: '#ff8364' }}>
              <h5 className="modal-title mx-auto" style={{ color: '#ffe8d5' }}>
                TAMBAH BUKU
              </h5>
              <button type="button" className="close ml-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddBook />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect('', actions)(withRouter(ModalAddBook));
