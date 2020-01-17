import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import { Link } from "react-router-dom"

import Header from '../component/header'
import Footer from '../component/footer'
import { actions } from '../store'

class ProductDetail extends React.Component{
    componentDidMount = ()=>{
        this.props.handleDetail(this.props.match.params.id)
    }
    render(){
        const statusLogin = JSON.parse(localStorage.getItem('status_login'))
        return(
            <React.Fragment>
                <Header
                homeBack = {e=>this.props.handleBackHome(e)}
                prosesSearch={e => this.props.handleSearch(e)}
                onCategory = {e => this.props.handleCategory(e)}/>
                <div className='container-fluid'>
                    <div className="container pt-5 mx-auto row">
                        <div className='col-md-6 col-sm-12 mx-auto'>
                            
                            <img className='border rounded' src={this.props.url_picture} style={{width:'50%'}}/>
                            
                        </div>
                        <div className='col-md-6 col-sm-12 border rounded'>
                            <h3>{this.props.judul} {this.props.jenjang} Kelas {this.props.kelas}</h3>
                            <p>{this.props.jumlahSoal} Soal</p>
                            <p>{this.props.penerbit}</p>
                            <h5>Rp. {this.props.harga}</h5>
                            {statusLogin?<button type="button" class="btn" style={{backgroundColor:'#ff8364', color:'#ffe8d5'}} onClick={()=>this.props.addCart(this.props.productId)}>Tambah Keranjang</button>
                            :
                            <di></di>
                            }
                            
                            <p>Deskripsi : </p>
                            <p>{this.props.deskripsi}</p>
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default connect('judul, jumlahSoal, penerbit, harga, url_picture, deskripsi, jenjang, kelas, mataPelajaran, isLoading, productId', actions
)(withRouter(ProductDetail))