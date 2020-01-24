import React from 'react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { Link } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer';
import ContentCart from '../component/content-cart';

class Cart extends React.Component {
  componentDidMount = () => {
    this.props.getCart();
  };

  render() {
    const { listCart} = this.props;
    const listAllCart = listCart.map(item => {
      return (
        <ContentCart
          titleCart={item.judul}
          imageCart={item.url_picture}
          publisherCart={item.penerbit}
          priceCart={item.price}
          idCart={item.id}
        />
      );
    });
    console.log('cek list cart', listCart);
    console.log('cek list Allcart', listAllCart);
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
              <div className="mx-auto">
                <img src={require('../image/zerocart.png')} alt='zerocart' />
              </div>
            ) : (
              listAllCart
            )}
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: '18rem' }}>
              <div class="card-body" style={{ backgroundColor: '#fffafa' }}>
                <h4 class="card-title">Ringkasan Belanja</h4>
                <h5 class="card-text">Rp. {this.props.totalPrice}</h5>
                {this.props.totalPrice === 0 ? (
                  <div></div>
                ) : (
                  <Link to="/Transaction">
                    <button
                      type="button"
                      class="btn"
                      style={{ backgroundColor: '#ff8364', color: '#ffe8d5' }}
                    >
                      Checkout
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default connect('listCart, isLoading, totalPrice', actions)(withRouter(Cart));
