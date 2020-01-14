import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import Header from '../component/header'
import Footer from '../component/footer'
import ContentProfile from '../component/content-profile'
import ContentLogTransaction from '../component/content-log-transaction-'
import ContentPublisherBook from '../component/content-publisher-book';
import ModalAddBook from '../component/modal_addbook'
import ModalRegisterPublisher from '../component/modal_register_publisher'

class Profile extends React.Component{
    componentDidMount = ()=>{
        this.props.getPublisherBook()
        this.props.getLogTransaction()
        this.props.getProfile()
    }
    render(){
        const{listLogTransaction, isLoading, listPublisherBook} = this.props
        const listAllLogTransaction = listLogTransaction.map(item =>{
            return <ContentLogTransaction
                    titleLog = {item.judul}
                    imageLog = {item.url_picture}
                    priceLog = {item.price}    
            />
        })

        const listAllPublisherBook = listPublisherBook.map(item =>{
            return <ContentPublisherBook
                    title = {item.judul}
                    image = {item.url_picture}
                    price = {item.harga}
                    jenjang = {item.jenjang}
                    grade = {item.kelas}
                    subject = {item.matapelajaran}
                    soal = {item.jumlah_soal}    
            />
        })

        return(
            <React.Fragment>
                <Header
                homeBack = {e=>this.props.handleBackHome(e)}
                prosesSearch={e => this.props.handleSearch(e)}
                onCategory = {e => this.props.handleCategory(e)}/>
                {this.props.statusPenerbit ?
                    (<div className='container-fluid row'>
                        <div className='col-md-3'>
                            <ContentProfile/>
                            <button class="nav-link btn btn-info" data-toggle="modal" data-target="#tambahBuku" type='button' style={{color:'#63707e'}}>Tambah Buku</button>
                            <ModalAddBook/>
                        </div>
                        <div className='col-md-5'>
                            <div className='border'>
                                {/* <h5>Total Transaksi</h5> */}
                                <h5>Total Keuntungan Rp. {this.props.totalRevenue}</h5>
                            </div>
                            {listAllLogTransaction}   
                        </div>
                        <div className='col-md-4'>
                            <h3>Daftar Buku Terbitan</h3>
                            {listAllPublisherBook}
                        </div>

                    </div>)
                    :
                    (<div className='container-fluid row' >
                        <div className='col-md-4'></div>
                        <div className=' align-content-center col-md-4'>
                            <ContentProfile/>
                            <button class="nav-link btn btn-info" data-toggle="modal" data-target="#daftarPenerbit" type='button' style={{color:'#63707e'}}>Daftar Penerbit</button>
                            <ModalRegisterPublisher/>
                        </div>
                        <div className='col-md-4'></div>
                    </div>)
            }
                <Footer/>
            </React.Fragment>
        )
    }
}
export default connect("listLogTransaction, listPublisherBook, isLoading, totalRevenue, statusPenerbit", actions)(withRouter(Profile));