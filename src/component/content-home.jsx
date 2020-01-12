import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

class ContentHome extends React.Component{
    render(){
        return(
                <div class="card col-3">
                    <img class="card-img-top" src={this.props.image} alt="Card image cap" style={{width:'100%', height:'100'}}/>
                    <div class="card-body">
                        <h4 class="card-text">{this.props.title} ({this.props.jenjang})</h4>
                        <p class="card-text">{this.props.publisher}</p>
                        <h5 class="card-text">Rp. {this.props.price}</h5>
                    </div>
                </div>
    )
    }
}
export default connect(actions)(withRouter(ContentHome));