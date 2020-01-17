import React from 'react'
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

class ContentLogTransaction extends React.Component{
    truncate= function(str) {
        return str.length > 25 ? str.substring(0, 20) + "..." : str;
    }  
    render(){
        return(
                    <tr>
                        <th scope="row">1</th>
                        <td>{this.truncate(`${this.props.titleLog} ${this.props.jenjangLog} Kelas ${this.props.gradeLog}`)}</td>
                        <td>Rp. {this.props.priceLog}</td>
                    </tr>
        )
    }
}
export default connect("", actions)(withRouter(ContentLogTransaction));