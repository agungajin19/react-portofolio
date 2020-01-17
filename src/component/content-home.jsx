import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate'

class ContentHome extends React.Component{
    truncate= function(str) {
        return str.length > 25 ? str.substring(0, 20) + "..." : str;
    }   
    render(){
        return(
            <div className=' col-md-2 px-auto py-2 rounded' >

                <div class="card text-center" style={{border:"None", backgroundColor:"#fffafa"}}>
                    <Link to={"/ProductDetail/"+this.props.id}>
                        <img class="card-img-top pt-2 pb-0" src={this.props.image} alt="Card image cap" style={{width:'75%', height:'10rem'}}/>
                    </Link>
                    <div class="card-body pb-1"  >
                        <span class="card-text" style={{fontSize:"12pt", color: "#ff8364", fontWeight:'500'}}>{this.truncate(`${this.props.title}  ${this.props.jenjang}  Kelas ${this.props.grade}`)}</span><br/>
                        <span class="card-text"  style={{fontSize:"8pt"}}>{this.props.publisher}</span><br/>
                        <span class="card-text" style={{fontSize:'10', color:'#fdb87d'}}>Rp. {this.props.price}</span>
                    </div>
                </div>
            </div>
    )
    }
}
export default connect("", actions)(withRouter(ContentHome));