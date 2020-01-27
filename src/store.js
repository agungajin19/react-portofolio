import createStore from 'unistore';
import Axios from 'axios';
import Swal from 'sweetalert2';

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
  judulEdit: '',
  url_pictureEdit: '',
  deskirpsiEdit: '',
  idBookEdit: 0,
  penerbitProfile: '',
  listUser: [],
  base_url: 'https://easy.my.id'
};
export const store = createStore(initialState);

export const actions = store => ({
  handleSearch: async (state, e) => {
    const keyword = e.target.value;
    getBookByCondition(keyword);
  },
  handleBackHome: async (state, e = '') => {
    const keyword = e;
    await getBookByCondition(keyword);
  },
  handleCategory: async (state, e = '') => {
    const keyword = e;
    await getBookByCategory(keyword);
  },
  addCart: async (state, e) => {
    const id = e;
    const req = {
      method: 'post',
      url: 'https://easy.my.id/user/cart',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: {
        book_id: id
      }
    };
    Axios(req)
      .then(response => {
        Swal.fire('Sukses!', `Buku berhasil diubah`, 'success');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Anda sudah menambahkan soal ini ke keranjang atau koleksi'
        });
      });
  },
  getCart: async state => {
    const req = {
      method: 'get',
      url: 'https://easy.my.id/user/cart',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({
          listCart: response.data.data,
          isLoading: false,
          totalPrice: response.data.totalprice
        });
      })
      .catch(error => {
        store.setState({ isLoading: false });
      });
  },
  getCollection: async state => {
    const req = {
      method: 'get',
      url: 'https://easy.my.id/user/collection',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({ listCollection: response.data.data, isLoading: false });
        console.log('cek list collection axios', state.listCollection);
      })
      .catch(error => {
        store.setState({ isLoading: false });
      });
  },
  getProfile: async state => {
    const req = {
      method: 'get',
      url: 'https://easy.my.id/user/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({
          usernameProfile: response.data.username,
          emailProfile: response.data.email,
          statusPenerbit: response.data.status_penerbit,
          penerbitProfile: response.data.nama_penerbit,
          isLoading: false
        });
      })
      .catch(error => {
        store.setState({ isLoading: false });
      });
  },
  getLogTransaction: async state => {
    const req = {
      method: 'get',
      url: 'https://easy.my.id/penerbit/transaction',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({
          listLogTransaction: response.data.transactions,
          totalRevenue: response.data.total_revenue,
          isLoading: false
        });
      })
      .catch(error => {
        store.setState({ isLoading: false });
      });
  },
  getPublisherBook: async state => {
    const req = {
      method: 'get',
      url: 'https://easy.my.id/penerbit/book',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({
          listPublisherBook: response.data.data,
          isLoading: false
        });
      })
      .catch(error => {
        store.setState({ isLoading: false });
      });
  },
  handleDeleteUser: async (state, id) => {
    const req = {
      method: 'delete',
      url: `https://easy.my.id/admin/user/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        getUserNew();
        Swal.fire('Sukses!', `Hapus User berhasil`, 'success');
      })
      .catch(error => {});
  },
  handleDelete: async (state, id) => {
    const req = {
      method: 'delete',
      url: 'https://easy.my.id/user/cart',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: {
        book_id: id
      }
    };
    Axios(req)
      .then(response => {
        getCartNew();
        Swal.fire('Sukses!', `Hapus Barang berhasil`, 'success');
      })
      .catch(error => {});
  },
  handleDetail: async (state, id) => {
    const req = {
      method: 'get',
      url: `https://easy.my.id/user/book/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    Axios(req)
      .then(response => {
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
          productId: response.data.id
        });
      })
      .catch(error => {});
  },
  handleIdEdit: async (state, id) => {
    console.log('cek id', id);
    store.setState({ idBookEdit: id });
    const req = {
      method: 'get',
      url: `https://easy.my.id/penerbit/book/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({
          judulEdit: response.data.judul,
          url_pictureEdit: response.data.url_picture,
          deskripsiEdit: response.data.deskripsi
        });
      })
      .catch(error => {});
  },
  getUser: () => {
    const req = {
      method: 'get',
      url: 'https://easy.my.id/admin/user',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    Axios(req)
      .then(response => {
        store.setState({ listUser: response.data, isLoading: false });
        console.log('cek gak error');
      })
      .catch(error => {
        store.setState({ isLoading: false });
        console.log('cek error');
      });
  }
});
export const getBookByCondition = async keyword => {
  const req = {
    method: 'get',
    url: `https://easy.my.id/public/book?search=${keyword}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  Axios(req)
    .then(response => {
      store.setState({ listBook: response.data.data, isLoading: false });
    })
    .catch(error => {
      store.setState({ isLoading: false });
    });
};
export const getBookByCategory = async keyword => {
  const req = {
    method: 'get',
    url: `https://easy.my.id/public/book?jenjang=${keyword}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  await Axios(req)
    .then(
      await function(response) {
        store.setState({ listBook: response.data.data, isLoading: false });
      }
    )
    .catch(error => {
      store.setState({ isLoading: false });
    });
};
export const getCartNew = async () => {
  const req = {
    method: 'get',
    url: 'https://easy.my.id/user/cart',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };
  Axios(req)
    .then(response => {
      store.setState({
        listCart: response.data.data,
        isLoading: false,
        totalPrice: response.data.totalprice
      });
    })
    .catch(error => {
      store.setState({ isLoading: false });
    });
};
export const getPublisherBookNew = async () => {
  const req = {
    method: 'get',
    url: 'https://easy.my.id/penerbit/book',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };
  Axios(req)
    .then(response => {
      store.setState({
        listPublisherBook: response.data.data,
        isLoading: false
      });
    })
    .catch(error => {
      store.setState({ isLoading: false });
    });
};
export const getUserNew = () => {
  const req = {
    method: 'get',
    url: 'https://easy.my.id/admin/user',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };
  Axios(req)
    .then(response => {
      store.setState({ listUser: response.data, isLoading: false });
      console.log('cek gak error');
    })
    .catch(error => {
      store.setState({ isLoading: false });
      console.log('cek error');
    });
};
