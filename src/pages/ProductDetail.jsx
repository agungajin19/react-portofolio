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
        return(
            <React.Fragment>
                <Header
                homeBack = {e=>this.props.handleBackHome(e)}
                prosesSearch={e => this.props.handleSearch(e)}
                onCategory = {e => this.props.handleCategory(e)}/>
                <div className='container-fluid'>
                    <div className="container">
                        <h3>{this.props.judul}</h3>
                        <p>{this.props.jumlahSoal}</p>
                        <p>{this.props.penerbit}</p>
                        <p>{this.props.jenjang}</p>
                        <p>{this.props.kelas}</p>
                        <h5>{this.props.harga}</h5>
                        <img src={this.props.url_picture}/>
                        <p>{this.props.deskripsi}</p>
                        <button onClick={()=>this.props.addCart(this.props.productId)}>Tambah Keranjang</button>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default connect('judul, jumlahSoal, penerbit, harga, url_picture, deskripsi, jenjang, kelas, mataPelajaran, isLoading, productId', actions
)(withRouter(ProductDetail))