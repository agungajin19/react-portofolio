import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";

class ContentCart extends React.Component{
    render(){
        return(
            <div className='col-md-12 border row'>
                <div className='col-md-3'>
                    <img src={this.props.imageCart} style={{width:'100%'}}/>
                </div>
                <div className='col-md-6'>
                    <h5>{this.props.titleCart}</h5>
                    <p>{this.props.publisherCart}</p>
                </div>
                <div className='col-md-3'>
                    <h6>Harga</h6>
                    <h6>Rp. {this.props.priceCart}</h6>
                </div>
            </div>
        )
    }
}
export default connect("", actions)(withRouter(ContentCart));