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
                    id = {item.id}
                    grade = {item.kelas}     
            />
        })
        return(
            <React.Fragment>
                <Header
                    homeBack = {e=>this.props.handleBackHome(e)}
                    prosesSearch={e => this.props.handleSearch(e)}
                    onCategory = {e => this.props.handleCategory(e)}/>
                <div className="container-fluid  py-5" style={{backgroundColor:'#fcf9f4e'}}>
                    <div className="container mx-auto  row" style={{backgroundColor:'c8dad3'}}>
                        {isLoading ? <div style={{textAlign : 'center'}}>Loading ...</div> : listAllBook}
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default connect("listBook, isLoading", actions)(withRouter(Home));
