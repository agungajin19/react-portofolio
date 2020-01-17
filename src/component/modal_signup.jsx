import React from 'react'
import SignUp from '../pages/SignUp'

class ModalSignUp extends React.Component{
    render(){
        return(
            // <!-- Modal -->
            <div class="modal fade" id="modalSignUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style={{backgroundColor:'#ffe8d5'}}>
                    <div class="modal-header text-center" style={{backgroundColor:'#ff8364'}}>
                        <h5 class="modal-title mx-auto" style={{color:'#ffe8d5'}}>DAFTAR</h5>
                        <button type="button" class="close ml-0"  data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" >
                        <SignUp/>
                    </div>
                </div>
            </div>
            </div>
                    )
                }
}
export default ModalSignUp