import React from 'react';
import { store, actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import Axios from 'axios';

class EditBook extends React.Component {
  handleInputEditBook = e => {
    store.setState({ [e.target.name]: e.target.value });
  };
  handleEditBook = async () => {
    const self = this;
    const req = {
      method: 'put',
      url: `https://easy.my.id/penerbit/book/${self.props.idBookEdit}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      data: {
        judul: self.props.judulEdit,
        url_picture: self.props.url_pictureEdit,
        deskripsi: self.props.deskripsiEdit
      }
    };
    console.log('tes input', req.data);

    return await Axios(req)
      .then(response => {
        this.props.getPublisherBook();
        alert('Berhasil edit buku');
      })
      .catch(error => {
        alert('Gagal edit Buku');
      });
  };
  render() {
    return (
      <div className="container align-item-center pr-lg-5 pl-lg-5 pt-lg-5">
        <form onSubmit={e => e.preventDefault(e)}>
          <div className="form-group row">
            <label
              for="inputPassword3"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Judul
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="judulEdit"
                onChange={e => this.handleInputEditBook(e)}
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inputPassword3"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Url Gambar
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="url_pictureEdit"
                onChange={e => this.handleInputEditBook(e)}
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inputPassword3"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Deskripsi
            </label>
            <div className="col-sm-8">
              <textarea
                type="textarea"
                name="deskripsiEdit"
                row="10"
                onChange={e => this.handleInputEditBook(e)}
                className="form-control"
                id="inputPassword3"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-4"></div>
            <div className="col-md-4 col-sm-12">
              <button
                type="submit"
                onClick={this.handleEditBook}
                className="btn btn-block"
                style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                data-dismiss="modal"
              >
                Edit
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  'judulEdit, url_pictureEdit, deskripsiEdit, idBookEdit',
  actions
)(withRouter(EditBook));
