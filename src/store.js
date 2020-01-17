import createStore from 'unistore';
import Axios from 'axios';


const initialState = {
  isLoading: true,
  username: '',
  password: '',
  listBook: [],
  listCart: [],
  usernameDaftar: '',
  passwordDaftar: '',
  emailDaftar: '',
  judul: '',
  jumlahSoal: 0,
  penerbit: '',
  harga: '',
  url_picture: '',
  deskripsi: '',
  jenjang: '',
  kelas: '',
  mataPelajaran: '',
  productId: 0,
  totalPrice: 0,
  paymentMethod: '',
  listCollection: [],
  listLogTransaction: [],
  listPublisherBook: [],
  usernameProfile: '',
  emailProfile: '',
  statusPenerbit: false,
  totalRevenue: 0,
  judulAdd: '',
  hargaAdd: 0,
  matapelajaranAdd: '',
  jumlah_soalAdd: 0,
  jenjangAdd: '',
  kelasAdd: '',
  url_pictureAdd: '',
  deskripsiAdd: '',
  namaPenerbit: '',

};
export const store = createStore(initialState);

export const actions = (store) => ({
  getBook: () => {
    const self = this;
    const req = {
      method: 'get',
      url: 'http://localhost:5000/public/book',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({ listBook: response.data.data, isLoading: false });
      })
      .catch((error) => {
        store.setState({ isLoading: false });
      });
  },
  handleSearch: async (state, e) => {
    const keyword = e.target.value;
    getBookByCondition(keyword);
  },
  handleBackHome: async (state, e) => {
    const keyword = e;
    await getBookByCondition(keyword);
  },
  handleCategory: async (state, e) => {
    const keyword = e;
    await getBookByCategory(keyword);
  },
  handleDetail: async (state, id) => {
    const self = this;
    const req = {
      method: 'get',
      url: `http://localhost:5000/user/book/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({
          judul: response.data.judul,
          jumlahSoal: response.data.jumlah_soal,
          penerbit: response.data.nama_penerbit,
          harga: response.data.harga,
          url_picture: response.data.url_picture,
          deskripsi: response.data.deskripsi,
          jenjang: response.data.jenjang,
          kelas: response.data.kelas,
          mataPelajaran: response.data.matapelajaran,
          isLoading: false,
          productId: response.data.id,
        });
      })
      .catch((error) => {
      });
  },
  addCart: async (state, e) => {
    const self = this;
    const id = e;
    const req = {
      method: 'post',
      url: 'http://localhost:5000/user/cart',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      data: {
        book_id: id,
      },
    };
    Axios(req)
      .then((response) => {
        alert('Soal berhasil ditambahkan');
      })
      .catch((error) => {
        alert('Anda sudah menambahkan soal ini ke keranjang atau koleksi');
      });
  },
  getCart: async (state) => {
    const req = {
      method: 'get',
      url: 'http://localhost:5000/user/cart',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({ listCart: response.data.data, isLoading: false, totalPrice: response.data.totalprice });
      })
      .catch((error) => {
        store.setState({ isLoading: false });
      });
  },
  getCollection: async (state) => {
    const req = {
      method: 'get',
      url: 'http://localhost:5000/user/collection',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({ listCollection: response.data.data, isLoading: false });
        console.log('cek list collection axios', state.listCollection);
      })
      .catch((error) => {
        store.setState({ isLoading: false });
      });
  },
  getProfile: async (state) => {
    const req = {
      method: 'get',
      url: 'http://localhost:5000/user/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({
          usernameProfile: response.data.username,
          emailProfile: response.data.email,
          statusPenerbit: response.data.status_penerbit,
          isLoading: false,
        });
      })
      .catch((error) => {
        store.setState({ isLoading: false });
      });
  },
  getLogTransaction: async (state) => {
    const req = {
      method: 'get',
      url: 'http://localhost:5000/penerbit/transaction',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({
          listLogTransaction: response.data.transactions,
          totalRevenue: response.data.total_revenue,
          isLoading: false,
        });
      })
      .catch((error) => {
        store.setState({ isLoading: false });
      });
  },
  getPublisherBook: async (state) => {
    const req = {
      method: 'get',
      url: 'http://localhost:5000/penerbit/book',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    Axios(req)
      .then((response) => {
        store.setState({
          listPublisherBook: response.data.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        store.setState({ isLoading: false });
      });
  },
  handleDelete: async (state, id) => {
    const self = this;
    const req = {
      method: 'delete',
      url: 'http://localhost:5000/user/cart',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      data: {
        book_id: id,
      },
    };
    console.log('cek id delete', id);
    Axios(req)
      .then((response) => {
        getCartNew();
        alert('Hapus barang berhasil');
      })
      .catch((error) => {
      });
  },


});
export const getBookByCondition = async (keyword) => {
  const self = this;
  const req = {
    method: 'get',
    url: `http://localhost:5000/public/book?search=${keyword}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  Axios(req)
    .then((response) => {
      store.setState({ listBook: response.data.data, isLoading: false });
    })
    .catch((error) => {
      store.setState({ isLoading: false });
    });
};
export const getBookByCategory = async (keyword) => {
  const self = this;
  const req = {
    method: 'get',
    url: `http://localhost:5000/public/book?jenjang=${keyword}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await Axios(req)
    .then(await function (response) {
      store.setState({ listBook: response.data.data, isLoading: false });
    })
    .catch((error) => {
      store.setState({ isLoading: false });
    });
};
export const getCartNew = async () => {
  const req = {
    method: 'get',
    url: 'http://localhost:5000/user/cart',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  Axios(req)
    .then((response) => {
      store.setState({ listCart: response.data.data, isLoading: false, totalPrice: response.data.totalprice });
    })
    .catch((error) => {
      store.setState({ isLoading: false });
    });
};
export const getPublisherBookNew = async () => {
  const req = {
    method: 'get',
    url: 'http://localhost:5000/penerbit/book',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  Axios(req)
    .then((response) => {
      store.setState({
        listPublisherBook: response.data.data,
        isLoading: false,
      });
    })
    .catch((error) => {
      store.setState({ isLoading: false });
    });
};
