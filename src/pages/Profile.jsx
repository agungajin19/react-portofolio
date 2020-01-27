import React from 'react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

import Header from '../component/header';
import Footer from '../component/footer';
import ContentProfile from '../component/content-profile';
import ContentLogTransaction from '../component/content-log-transaction-';
import ContentPublisherBook from '../component/content-publisher-book';
import ModalAddBook from '../component/modal_addbook';
import ModalRegisterPublisher from '../component/modal_register_publisher';
import ModalEditBook from '../component/modal_editbook';

class Profile extends React.Component {
  componentDidMount = () => {
    this.props.getPublisherBook();
    this.props.getLogTransaction();
    this.props.getProfile();
    this.props.getUser();
  };
  render() {
    const { listLogTransaction, listPublisherBook, listUser } = this.props;
    const userName = localStorage.getItem('username');
    const listAllLogTransaction = listLogTransaction.map((item, key) => {
      return (
        <ContentLogTransaction
          titleLog={item.judul}
          imageLog={item.url_picture}
          priceLog={item.price}
          jenjangLog={item.jenjang}
          gradeLog={item.kelas}
          no={key + 1}
        />
      );
    });

    const listAllPublisherBook = listPublisherBook.map(item => {
      return (
        <ContentPublisherBook
          title={item.judul}
          image={item.url_picture}
          price={item.harga}
          jenjang={item.jenjang}
          grade={item.kelas}
          subject={item.matapelajaran}
          soal={item.jumlah_soal}
          id={item.id}
        />
      );
    });

    const listAllUser = listUser.map((item, key) => {
      return (
        <tr>
          <th scope="row">{key + 1}</th>
          <td>{item.username}</td>
          <td>{item.email}</td>
          {item.status_penerbit ? <td>Terdaftar</td> : <td>Tidak Terdaftar</td>}
          {item.status_penerbit ? <td>{item.nama_penerbit}</td> : <td>-</td>}
          <td>
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={() => this.props.handleDeleteUser(item.id)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      );
    });

    return userName === 'internal' ? (
      <React.Fragment>
        <Header
          homeBack={e => this.props.handleBackHome(e)}
          prosesSearch={e => this.props.handleSearch(e)}
          onCategory={e => this.props.handleCategory(e)}
        />
        <div className="container pt-5 ">
          <h4>Daftar User</h4>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Status Penerbit</th>
                <th scope="col">Nama Penerbit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{listAllUser}</tbody>
          </table>
        </div>

        <Footer homeBack={e => this.props.handleBackHome(e)} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Header
          homeBack={e => this.props.handleBackHome(e)}
          prosesSearch={e => this.props.handleSearch(e)}
          onCategory={e => this.props.handleCategory(e)}
        />
        {this.props.statusPenerbit ? (
          <div className="container-fluid row pt-5">
            <div className="col-md-3 text-center">
              <ContentProfile />
              <button
                class="btn mx-auto"
                data-toggle="modal"
                data-target="#tambahBuku"
                type="button"
                style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
              >
                Tambah Buku
              </button>
              <ModalAddBook />
            </div>
            <div className="col-md-5">
              <div>
                <h5 style={{ color: 'ff8364' }}>Total Keuntungan Rp. {this.props.totalRevenue}</h5>
              </div>
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Harga</th>
                  </tr>
                </thead>
                <tbody>{listAllLogTransaction}</tbody>
              </table>
            </div>
            <div className="col-md-4 text-center">
              <h5 style={{ color: 'ff8364' }}>Daftar Buku Terbitan</h5>
              {listAllPublisherBook}
              <ModalEditBook />
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="container">
              <div className="row pt-5">
                <div className="col-md-4"></div>
                <div
                  className="col-md-4 border rounded text-center"
                  style={{ backgroundColor: '#fffafa' }}
                >
                  <div className="pt-3 pb-3">
                    <ContentProfile />
                    <button
                      class="btn"
                      data-toggle="modal"
                      data-target="#daftarPenerbit"
                      type="button"
                      style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                    >
                      Daftar Penerbit
                    </button>
                    <ModalRegisterPublisher />
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </React.Fragment>
    );
  }
}
export default connect(
  'listLogTransaction, listPublisherBook, listUser, isLoading, totalRevenue, statusPenerbit',
  actions
)(withRouter(Profile));
