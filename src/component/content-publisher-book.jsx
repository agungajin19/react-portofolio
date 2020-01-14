import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

class PublisherBook extends React.Component{
    render(){
        return(
            <div className='col-md-12 border row'>
                <div className='col-md-3'>
                    <img src={this.props.image} style={{width:'100%'}}/>
                </div>
                <div className='col-md-6'>
                    <h5>{this.props.title}</h5>
                    <p>Mata Pelajaran {this.props.subject}</p>
                    <p>Kelas {this.props.grade} {this.props.jenjang}</p>
                    <p>Jumlah Soal {this.props.soal}</p>

                </div>
                <div className='col-md-3'>
                    <h6>Harga</h6>
                    <h6>Rp. {this.props.price}</h6>
                </div>
            </div>
        )
    }
}
export default connect("usernameProfile, emailProfile, statusPenerbit", actions)(withRouter(PublisherBook))