import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ShoppingCart from './shopping-cart'
import { removeItem,removeAllItems } from '../../redux/cart-reducer'

class ShoppingCartContainer extends React.Component {
  
    render() {
        return (
            <ShoppingCart {...this.props}/>
        )
    }
}


const mapStateToProps = state => ({
    purchases: state.phoneReducer.shoppingCart
}) 

export default compose(connect(mapStateToProps, {removeItem,removeAllItems})(ShoppingCartContainer))