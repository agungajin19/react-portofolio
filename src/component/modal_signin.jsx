import React from 'react';
import SignIn from '../pages/SignIn';

const Modal = props => {
  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ backgroundColor: '#daf1f9' }}>
          <div className="modal-header text-center" style={{ backgroundColor: '#87c0cd' }}>
            <h5 className="modal-title mx-auto" style={{ color: '#fee9d7' }}>
              MASUK
            </h5>
            <button type="button" className="close ml-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
