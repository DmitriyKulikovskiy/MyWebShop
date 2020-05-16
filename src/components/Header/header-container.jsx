import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './header';

class HeaderContainer extends React.Component {
    render(){
        return(
            <Header {...this.props}  />
        )
    }
}

const mapStateToProps = state => ({
    totalCount: state.phoneReducer.shoppingCart
})

export default compose(connect(mapStateToProps)(HeaderContainer));