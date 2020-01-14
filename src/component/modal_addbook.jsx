import React from 'react'
import AddBook from '../pages/AddBook'
import { actions } from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

class ModalAddBook extends React.Component{
    render(){
        return(
            // <!-- Modal -->
            <div class="modal fade" id="tambahBuku" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <AddBook/>
                    </div>
                </div>
            </div>
            </div>
                    )
                }
}
export default connect('',actions
)(withRouter(ModalAddBook))