import React from 'react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

import Header from '../component/header';
import Footer from '../component/footer';
import ContentCollection from '../component/content-collection';

class Collection extends React.Component {
  componentDidMount = () => {
    this.props.getCollection();
  };
  render() {
    const { listCollection } = this.props;
    const listAllCollection = listCollection.map(item => {
      return (
        <ContentCollection
          titleCollection={item.judul}
          imageCollection={item.url_picture}
          jenjangCollection={item.jenjang}
          kelasCollection={item.kelas}
          publisherCollection={item.penerbit}
          jumlahSoal={item.jumlah_soal}
        />
      );
    });
    console.log('cek list collection', listCollection);

    return (
      <React.Fragment>
        <Header
          homeBack={e => this.props.handleBackHome(e)}
          prosesSearch={e => this.props.handleSearch(e)}
          onCategory={e => this.props.handleCategory(e)}
        />
        <div className="container row mt-5 pl-5 mx-auto">
          <div className="row mx-auto">
            {listCollection.length === 0 ? (
              <div className="mx-auto text-center">
                <img
                  src={require('../image/emptycollection.png')}
                  alt="empty"
                  style={{ width: '50%' }}
                />
              </div>
            ) : (
              listAllCollection
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default connect('listCollection, isLoading', actions)(withRouter(Collection));
