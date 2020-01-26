import React from 'react';
import Axios from 'axios';
import { store, actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import Swal from 'sweetalert2';

class ModalRegisterPublisher extends React.Component {
  handleMasukan = e => {
    store.setState({ [e.target.name]: e.target.value });
  };
  handleDaftarPenerbit = () => {
    const self = this;
    const req = {
      method: 'post',
      url: 'https://easy.my.id/penerbit/register',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      data: {
        nama_penerbit: self.props.namaPenerbit
      }
    };
    Axios(req)
      .then(function(response) {
        store.setState({ statusPenerbit: true, penerbitProfile: self.props.namaPenerbit });
        Swal.fire('Daftar Sukses!', `Selamat Datang ${self.props.namaPenerbit}`, 'success');
      })
      .catch(function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Gagal Daftar Jadi Penerbit'
        });
      });
  };
  render() {
    return (
      // <!-- Modal -->
      <div
        class="modal fade"
        id="daftarPenerbit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style={{ backgroundColor: '#ffe8d5' }}>
            <div class="modal-header text-center" style={{ backgroundColor: '#ff8364' }}>
              <h5 class="modal-title mx-auto" style={{ color: '#ffe8d5' }}>
                DAFTAR PENERBIT
              </h5>
              <button type="button" class="close ml-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* MODAL BODY */}
              <div className="container align-item-center pr-0">
                <form onSubmit={e => e.preventDefault(e)}>
                  <div className="form-group row">
                    <label
                      for="inputEmail3"
                      className="col-sm-4 col-form-label"
                      style={{ color: '#ff8364' }}
                    >
                      Nama Penerbit
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="namaPenerbit"
                        onChange={e => this.handleMasukan(e)}
                        className="form-control"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 col-sm-12">
                      <button
                        type="submit"
                        onClick={this.handleDaftarPenerbit}
                        className="btn btn-block"
                        style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                        data-dismiss="modal"
                      >
                        Daftar
                      </button>
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                </form>
              </div>
              {/* MODAL BODY */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect('namaPenerbit', actions)(withRouter(ModalRegisterPublisher));
