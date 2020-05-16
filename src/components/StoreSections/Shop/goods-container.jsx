import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Goods from './goods'
import { searchItem } from '../../../redux/cart-reducer'

class GoodsContainer extends React.Component {

    render() {
        return (
            <Goods {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    searchQuery: state.phoneReducer.searchQuery
}) 

export default compose(connect(mapStateToProps,{searchItem})(GoodsContainer))