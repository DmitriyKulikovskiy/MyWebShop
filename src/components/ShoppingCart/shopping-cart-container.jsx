import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ShoppingCart from './shopping-cart'
import { removeItem,removeAllItems } from '../../redux/cart-reducer'
import { callModal } from '../../redux/checkout-reducer'

class ShoppingCartContainer extends React.Component {
  
    render() {
        return (
            <ShoppingCart {...this.props}/>
        )
    }
}


const mapStateToProps = state => ({
    purchases: state.phoneReducer.shoppingCart,
    modalStatus: state.checkOutReducer.modalStatus
}) 

export default compose(connect(mapStateToProps, {removeItem,removeAllItems,callModal})(ShoppingCartContainer))