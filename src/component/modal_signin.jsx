import React from 'react'
import SignIn from '../pages/SignIn'

class Modal extends React.Component{
    render(){
        return(
            // <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <SignIn/>
                    </div>
                </div>
            </div>
            </div>
                    )
                }
}
export default Modal