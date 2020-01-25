import React from 'react';
import SignUp from '../pages/SignUp';

const ModalSignUp = props => {
  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="modalSignUp"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ backgroundColor: '#ffe8d5' }}>
          <div className="modal-header text-center" style={{ backgroundColor: '#ff8364' }}>
            <h5 className="modal-title mx-auto" style={{ color: '#ffe8d5' }}>
              DAFTAR
            </h5>
            <button type="button" className="close ml-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalSignUp;
