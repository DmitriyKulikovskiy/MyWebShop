import shortid from "shortid"

const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
const PUT_LIKE = 'PUT_LIKE'

const initialState = {
    comments: [],
    text: ''
}

const feedbackReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT: {
            let newComment = {
                id: shortid.generate(),
                text: state.text,
                like: 0,
                dislike: 0,
                rating: 0
            }
            return {
                ...state,
                comments: [newComment, ...state.comments],
                text: ''
            }
        }
        case UPDATE_COMMENT: {
            return {
                ...state,
                text: action.value
            }
        }

        case PUT_LIKE: {
            return {
                ...state,
                comments: state.comments.map(setLike => setLike.id === action.id ? {...setLike, like: setLike.like - 1 && + 1} : setLike)
            }
        }

    default:
        return state
    }
}

export const postComment = () => ({type: 'ADD_COMMENT'});
export const onCommentChange = (value) => ({type: 'UPDATE_COMMENT', value})
export const putLike = (id) => ({type: 'PUT_LIKE', id})

export default feedbackReducer;