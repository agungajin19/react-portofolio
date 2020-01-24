import React from 'react';
import { store, actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// ADDBOOK
class AddBook extends React.Component {
  handleInputAddBook = e => {
    const self = this;
    store.setState({ [e.target.name]: e.target.value });
  };
  handleAddBook = async () => {
    const self = this;
    const req = {
      method: 'post',
      url: 'https://easy.my.id/penerbit/book',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      data: {
        judul: self.props.judulAdd,
        harga: self.props.hargaAdd * 1,
        matapelajaran: self.props.matapelajaranAdd,
        jumlah_soal: self.props.jumlah_soalAdd * 1,
        jenjang: self.props.jenjangAdd,
        kelas: self.props.kelasAdd,
        url_picture: self.props.url_pictureAdd,
        deskripsi: self.props.deskripsiAdd
      }
    };
    console.log('tes input', req.data);

    return await Axios(req)
      .then(response => {
        this.props.getPublisherBook();
        alert('Berhasil menambahkan buku');
      })
      .catch(error => {
        alert('Gagal Menambahkan Buku');
        console.log('tes status penerbit', this.props.statusPenerbit);
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
                name="judulAdd"
                onChange={e => this.handleInputAddBook(e)}
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inputEmail3"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Subjek
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="matapelajaranAdd"
                onChange={e => this.handleInputAddBook(e)}
                className="form-control"
                id="inputEmail3"
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
              Jumlah Soal
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="jumlah_soalAdd"
                onChange={e => this.handleInputAddBook(e)}
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inlineFormCustomSelect"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Jenjang
            </label>
            <div className="col-sm-8 ">
              <select
                class="custom-select "
                id="inlineFormCustomSelect"
                name="jenjangAdd"
                onChange={e => this.handleInputAddBook(e)}
              >
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inlineFormCustomSelect"
              className="col-sm-4 col-form-label"
              style={{ color: '#ff8364' }}
            >
              Kelas
            </label>
            <div className="col-sm-8 ">
              <select
                class="custom-select "
                id="inlineFormCustomSelect"
                name="kelasAdd"
                onChange={e => this.handleInputAddBook(e)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
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
                name="url_pictureAdd"
                onChange={e => this.handleInputAddBook(e)}
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
              Harga
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="hargaAdd"
                onChange={e => this.handleInputAddBook(e)}
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
                name="deskripsiAdd"
                row="10"
                onChange={e => this.handleInputAddBook(e)}
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
                onClick={this.handleAddBook}
                className="btn btn-block"
                style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                data-dismiss="modal"
              >
                Tambah
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
  'judulAdd, hargaAdd, matapelajaranAdd, jumlah_soalAdd, jenjangAdd, kelasAdd, url_pictureAdd, deskripsiAdd, statusPenerbit',
  actions
)(withRouter(AddBook));
