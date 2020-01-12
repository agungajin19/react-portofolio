import React from 'react';
import Axios from 'axios'
import {store} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import { Link } from "react-router-dom";


class SignIn extends React.Component{
    handleMasukan = (e) =>{
        const self = this
        store.setState({[e.target.name] : e.target.value})
    }
    handleLogin = () =>{
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/user/login",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              username: self.props.username,
              password: self.props.password
            }
        }
        Axios(req)
        .then(function(response) {
            if (response.data.hasOwnProperty('token')){
                localStorage.setItem('username', self.props.username)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('status_login', true)
                self.props.history.push("/")
            }
            
            console.log("nilai data res",response.data)
        })
        .catch(function(error) {
            alert('invalid username or password')
        })
    }

    render(){
        return(
            <div className='container align-item-center pr-0'>
                <form onSubmit={e=> e.preventDefault(e)}>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-4 col-form-label">Username</label>
                        <div className="col-sm-8">
                        <input type="text" name='username' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8">
                        <input type="password" name='password' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                        <button type="submit" onClick={this.handleLogin} className="btn btn-primary btn-block" data-dismiss="modal">Masuk</button>
                        </div>
                        <div className="col-sm-12 py-2  row">
                            <p>Belum punya akun?</p>
                            <Link to="/Daftar" class="nav-link pt-0 m-0" style={{color:'#145374'}}>Daftar</Link>
                        </div>
                    </div>
                    {this.props.cekFotoStatus ? 
                    (<div className="col-sm-12">
                        <img src={this.props.fotoUrlInput} width={"100%"}/>
                    </div>) : (<div></div>)
                    }
                </form>
            </div>
        )
    }
}
export default connect('password, username'
)(withRouter(SignIn))