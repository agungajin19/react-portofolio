import React from 'react'
import SignUp from '../pages/SignUp'

class ModalSignUp extends React.Component{
    render(){
        return(
            // <!-- Modal -->
            <div class="modal fade" id="modalSignUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <SignUp/>
                    </div>
                </div>
            </div>
            </div>
                    )
                }
}
export default ModalSignUp