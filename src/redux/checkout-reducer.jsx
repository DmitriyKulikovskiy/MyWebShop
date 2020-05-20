const OPEN_CLOSE_MODAL = 'OPEN_CLOSE_MODAL'

const initialState = {
    modalStatus: false
}

const checkOutReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_CLOSE_MODAL: {
            return {
                ...state,
                modalStatus: !state.modalStatus
            }
        }
        default:
            return state
    }
}

export const callModal = (modal) => ({type: 'OPEN_CLOSE_MODAL',modal})

export default checkOutReducer