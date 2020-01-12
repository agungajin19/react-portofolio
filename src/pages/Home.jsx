import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import Header from '../component/header'
import Footer from '../component/footer'
import ContentHome from '../component/content-home'

class Home extends React.Component{
    componentDidMount = () => {
        this.props.getBook()
    }
    render(){
        const{listBook, isLoading} = this.props
        const listAllBook = listBook.map(item =>{
            return <ContentHome
                    title = {item.judul}
                    image = {item.url_picture}
                    publisher = {item.penerbit}
                    price = {item.harga}
                    jenjang = {item.jenjang}     
            />
        })
        return(
            <React.Fragment>
                <Header
                    prosesSearch={e => this.props.handleSearch(e)}
                    onCategory = {e => this.props.handleCategory(e)}/>
                <div className="container-fluid mr-0 py-5" style={{backgroundColor:'#f2f6f5'}}>
                    <div className="container row" style={{backgroundColor:'c8dad3'}}>
                        {isLoading ? <div style={{textAlign : 'center'}}>Loading ...</div> : listAllBook}
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default connect("listBook, isLoading", actions)(withRouter(Home));
