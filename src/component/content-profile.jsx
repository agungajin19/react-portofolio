import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

class ContentProfile extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img  src={require('../image/profile.png')} style={{width:'50%'}}/>
                </div>
                <div>
                    <h5>username : {this.props.usernameProfile}</h5>
                    <h5>email : {this.props.emailProfile}</h5>
                </div>

            </div>
        )
    }
}
export default connect("usernameProfile, emailProfile, statusPenerbit", actions)(withRouter(ContentProfile))