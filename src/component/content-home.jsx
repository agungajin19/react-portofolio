import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate'

class ContentHome extends React.Component{    
    render(){
        return(
            <div className=' col-md-2 px-auto py-2'>

                <div class="card">
                    <Link to={"/ProductDetail/"+this.props.id}>
                    {/* <Link to={"/ProductDetail/"+this.props.id} onClick={()=>this.props.handleDetail(this.props.id)}> */}
                        <img class="card-img-top" src={this.props.image} alt="Card image cap" style={{width:'100%', height:'100%'}}/>
                    </Link>
                    <div class="card-body">
                        <h5 class="card-text">{this.props.title} ({this.props.jenjang})</h5>
                        <p class="card-text">{this.props.publisher}</p>
                        <h6 class="card-text">Rp. {this.props.price}</h6>
                    </div>
                </div>
            </div>
    )
    }
}
export default connect("", actions)(withRouter(ContentHome));