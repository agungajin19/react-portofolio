import React, {Component} from 'react';
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import ModalSignin from './modal_signin'


class Header extends Component{
    handleSignOut = () =>{
        // const self = this
        localStorage.setItem('status_login', false)
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        this.props.history.push("/")
    }
    render(){
        const statusLogin = JSON.parse(localStorage.getItem('status_login'))
        const userName = localStorage.getItem('username')
        return(
            <header>
                <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#93b5b3'}}>
                <Link to="/"><a class="navbar-brand pl-2" href="/"><img src={require('../image/logo.png')} alt="logo" width="40px" color='#63707e'/>easy.com</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    {/* {headerKategori} */}
                    <li class="nav-item">
                        <Link to="/SD" class="nav-link" style={{color:'#63707e'}} onClick={()=>this.props.onCategory('SD')}>SD</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/SMP" class="nav-link" style={{color:'#63707e'}} onClick={()=>this.props.onCategory('SMP')}>SMP</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/SMA" class="nav-link" style={{color:'#63707e'}} onClick={()=>this.props.onCategory('SMA')}>SMA</Link>
                    </li>
                    <li>
                        <Link to="/SBMPTN" class="nav-link" style={{color:'#63707e'}} onClick={()=>this.props.onCategory('SBMPTN')}>SBMPTN</Link>
                    </li>
                </ul>
                {/* <Search {...this.props}/> */}
                <ul class="navbar-nav ml-lg-5">
                    <li>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.props.prosesSearch(e)}/>
                        </form>
                    </li>
                  {statusLogin ?
                    (<React.Fragment>
                    <li class="nav-item">
                        <a className="nav-link" style={{color:'#63707e'}}>Hello, {userName} |</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color:'#63707e'}} onClick={this.handleSignOut}>Keluar</Link>
                    </li></React.Fragment>):
                    (<li class="nav-item">
                        <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter" type='button' style={{color:'#63707e'}}>Masuk</a>
                        <ModalSignin/>
                    </li>)
                  }
                </ul>
                </div>
            </nav> 
        </header>
        );
    }
}

export default connect(actions)(withRouter(Header));