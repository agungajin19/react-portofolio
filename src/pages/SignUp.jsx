import React from 'react'
import {store} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import { Link } from "react-router-dom";
import Axios from 'axios'

class SignUp extends React.Component{
    handleInputDaftar = (e) =>{
        const self = this
        store.setState({[e.target.name] : e.target.value})
    }
    handleDaftar = () =>{
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/user/register",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
                email : self.props.emailDaftar,
                username: self.props.usernameDaftar,
                password: self.props.passwordDaftar,
            }
        }
        console.log('tes data',req.data)
        console.log('tes email', self.props.emailDaftar)
        Axios(req)
        .then(function(response) {
            alert('Daftar Sukses !!! Silahkan Masuk')
        })
        .catch(function(error) {
            alert('Daftar Gagal')
        })
    }
    render(){
        return(
            <div className='container align-item-center pr-lg-5 pl-lg-5 pt-lg-5'>
            <form onSubmit={e=> e.preventDefault(e)}>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                    <input type="email" name='emailDaftar' onChange={e=>this.handleInputDaftar(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-4 col-form-label">Username</label>
                    <div className="col-sm-8">
                    <input type="text" name='usernameDaftar' onChange={e=>this.handleInputDaftar(e)} className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                    <input type="password" name='passwordDaftar' onChange={e=>this.handleInputDaftar(e)} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className='col-md-4'></div>
                    <div className="col-md-4 col-sm-12">
                    <button type="submit" onClick={this.handleDaftar} className="btn btn-primary btn-block" data-dismiss="modal">Daftar</button>
                    </div>
                    <div className='col-md-4'></div>
                    
                </div>
            </form>
        </div>
        )
    }
}
export default connect('emailDaftar, passwordDaftar, usernameDaftar'
)(withRouter(SignUp))