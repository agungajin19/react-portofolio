import React from 'react'
import {store} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import { Link } from "react-router-dom";
import Axios from 'axios'

class AddBook extends React.Component{
    handleInputAddBook = (e) =>{
        const self = this
        store.setState({[e.target.name] : e.target.value})
    }
    handleAddBook = async() =>{
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/penerbit/book",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: {
                judul : self.props.judulAdd,
                harga: self.props.hargaAdd*1,
                matapelajaran: self.props.matapelajaranAdd,
                jumlah_soal : self.props.jumlah_soalAdd*1,
                jenjang : self.props.jenjangAdd,
                kelas : self.props.kelasAdd,
                url_picture : self.props.url_pictureAdd,
                deskripsi : self.props.deskripsiAdd,
            }
        }
        
        return await Axios(req)
        .then((response) => {
            self.props.history.push("/")
            alert('Berhasil Menambahkan Buku')
        })
        .catch((error)=> {
            alert('Gagal Menambahkan Buku')
            console.log('tes status penerbit', this.props.statusPenerbit)
        })
    }
    render(){
        return(
            <div className='container align-item-center pr-lg-5 pl-lg-5 pt-lg-5'>
            <form onSubmit={e=> e.preventDefault(e)}>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Judul</label>
                    <div className="col-sm-8">
                    <input type="text" name='judulAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">Subjek</label>
                    <div className="col-sm-8">
                    <input type="text" name='matapelajaranAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Jumlah Soal</label>
                    <div className="col-sm-8">
                    <input type="text" name='jumlah_soalAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Jenjang</label>
                    <div className="col-sm-8">
                    <input type="text" name='jenjangAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Kelas</label>
                    <div className="col-sm-8">
                    <input type="text" name='kelasAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Url Gambar</label>
                    <div className="col-sm-8">
                    <input type="text" name='url_pictureAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Harga</label>
                    <div className="col-sm-8">
                    <input type="text" name='hargaAdd' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Deskripsi</label>
                    <div className="col-sm-8">
                    <textarea type="textarea" name='deskripsiAdd' row='10' onChange={e=>this.handleInputAddBook(e)} className="form-control" id="inputPassword3"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className='col-md-4'></div>
                    <div className="col-md-4 col-sm-12">
                    <button type="submit" onClick={this.handleAddBook} className="btn btn-primary btn-block" data-dismiss="modal">Tambah</button>
                    </div>
                    <div className='col-md-4'></div>
                    
                </div>
            </form>
        </div>
        )
    }
}
export default connect('judulAdd, hargaAdd, matapelajaranAdd, jumlah_soalAdd, jenjangAdd, kelasAdd, url_pictureAdd, deskripsiAdd'
)(withRouter(AddBook))