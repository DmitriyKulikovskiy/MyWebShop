import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { postComment,onCommentChange,putLike} from '../../../../redux/feedback-reducer'
import ClientFeedback from './client-feedback'

class FeedbackContainer extends React.Component {

    render() {
        return (
            <ClientFeedback {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.feedbackReducer.comments,
    text: state.feedbackReducer.text
}) 

export default compose(connect(mapStateToProps,{postComment,onCommentChange,putLike})(FeedbackContainer))