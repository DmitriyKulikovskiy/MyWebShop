import React from 'react'
import Iphone from './Iphone'
import { compose } from 'redux'
import { connect } from 'react-redux'

class IphoneContainer extends React.Component {
   
    render() {
        return (
            <Iphone {...this.props} />
        )
    }
}



const mapStateToProps = (state) => ({
    phones: state.phoneReducer.data,
    searchQuery: state.phoneReducer.searchQuery
}) 

export default compose(connect(mapStateToProps)(IphoneContainer))