import React from 'react'
import CurrentIphone from './current-iphone'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {addToCart } from '../../../../redux/cart-reducer'

class CurrentIphoneContainer extends React.Component {

    render() {
        return (
            <CurrentIphone {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    phones: state.phoneReducer.data,
    shoppingCart: state.phoneReducer.shoppingCart
}) 

export default compose(connect(mapStateToProps,{addToCart})(CurrentIphoneContainer))