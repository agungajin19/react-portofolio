import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";

import Header from '../component/header'
import Footer from '../component/footer'
import ContentCollection from '../component/content-collection'


class Collection extends React.Component{
    componentDidMount = () =>{
        this.props.getCollection()
    }
    render(){
        const{listCollection, isLoading} = this.props
        const listAllCollection = listCollection.map(item =>{
            return <ContentCollection
                    titleCollection = {item.judul}
                    imageCollection = {item.url_picture}
                    jenjangCollection = {item.jenjang}
                    kelasCollection = {item.kelas}
                    publisherCollection = {item.penerbit}  
            />
        })
        console.log('cek list', listCollection)

        return(
            <React.Fragment>
                <Header
                homeBack = {e=>this.props.handleBackHome(e)}
                prosesSearch={e => this.props.handleSearch(e)}
                onCategory = {e => this.props.handleCategory(e)}/>
                <div className='container row mt-5 pl-5'>
                    <div className='col-md-12 row'>
                        {(listCollection===[])?<div style={{textAlign : 'center'}}>Tidak ada koleksi</div>:listAllCollection}
                    </div>

                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default connect("listCollection, isLoading", actions)(withRouter(Collection));