import React from 'react';
import Axios from 'axios';
import { actions, store } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import Swal from 'sweetalert2';

import Header from '../component/header';
import Footer from '../component/footer';
import ContentTransaction from '../component/content-transaction';

class Transaction extends React.Component {
  componentDidMount = () => {
    this.props.getCart();
  };
  handleInputTransaction = e => {
    store.setState({ [e.target.name]: e.target.value });
  };
  handlePayment = state => {
    const self = this;
    const req = {
      method: 'post',
      url: 'https://easy.my.id/user/payment',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      data: {
        payment_method: this.props.paymentMethod
      }
    };
    console.log('cek payment', this.props.paymentMethod);
    Axios(req)
      .then(function(response) {
        store.setState({ listCart: [], totalPrice: 0 });
        Swal.fire(
          'Sukses!',
          `Pembayaran dengan menggunakan ${response.data.payment_method} berhasil`,
          'success'
        );
        self.props.history.push('/Collection');
      })
      .catch(function(error) {
        store.setState({ isLoading: false });
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Transaksi gagal'
        });
      });
  };
  render() {
    const { listCart } = this.props;
    const listAllCart = listCart.map(item => {
      return (
        <ContentTransaction
          titleCart={item.judul}
          imageCart={item.url_picture}
          publisherCart={item.penerbit}
          priceCart={item.price}
        />
      );
    });

    return (
      <React.Fragment>
        <Header
          homeBack={e => this.props.handleBackHome(e)}
          prosesSearch={e => this.props.handleSearch(e)}
          onCategory={e => this.props.handleCategory(e)}
        />
        <div className="container row mt-5 pl-5">
          <div className="col-md-8 row">
            {this.props.totalPrice === 0 ? (
              <div style={{ textAlign: 'center' }}>Tidak ada transaksi</div>
            ) : (
              listAllCart
            )}
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: '18rem', backgroundColor: '#fffafa' }}>
              <div class="card-body">
                <h4 class="card-title">Ringkasan Belanja</h4>
                <h5 class="card-text">Rp. {this.props.totalPrice}</h5>
                <form onSubmit={e => e.preventDefault(e)}>
                  <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                      <label class="mr-sm-2" for="inlineFormCustomSelect">
                        Metode Pembayaran
                      </label>
                      <select
                        class="custom-select mr-sm-2"
                        id="inlineFormCustomSelect"
                        name="paymentMethod"
                        onChange={e => this.handleInputTransaction(e)}
                      >
                        <option selected>....</option>
                        <option value="Bank BNI">Bank BNI</option>
                        <option value="Bank BCA">Bank BCA</option>
                        <option value="Bank BRI">BANK BRI</option>
                        <option value="Bank Mandiri">BANK Mandiri</option>
                        <option value="Gopay">Gopay</option>
                        <option value="OVO">OVO</option>
                        <option value="DANA">DANA</option>
                        <option value="Link Aja">Link Aja</option>
                      </select>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="btn"
                        style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                        onClick={this.handlePayment}
                      >
                        Bayar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer homeBack={e => this.props.handleBackHome(e)} />
      </React.Fragment>
    );
  }
}
export default connect(
  'listCart, isLoading, totalPrice, paymentMethod',
  actions
)(withRouter(Transaction));
