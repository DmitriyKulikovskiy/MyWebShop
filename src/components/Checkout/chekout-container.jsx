import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Checkout from './checkout'
import { callModal } from '../../redux/checkout-reducer'



class CheckoutContainer extends React.Component {
  
    render() {
        return (
            <Checkout {...this.props}/>
        )
    }
}


const mapStateToProps = state => ({
    modalStatus: state.checkOutReducer.modalStatus,
    shoppingCart: state.phoneReducer.shoppingCart
}) 

export default compose(connect(mapStateToProps,{callModal})(CheckoutContainer))