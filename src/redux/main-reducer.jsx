const GET_DATA_PHONE = 'GET_DATA_PHONE'

const initialState = {
   
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA_PHONE: {
            return {
             
            }
        }
        default:
            return state
    }
}





export default mainReducer;

