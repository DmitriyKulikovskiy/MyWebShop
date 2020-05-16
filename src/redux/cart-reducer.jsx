import phones from "./../API/phone.json"
import shortid from "shortid";

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
const REMOVE_ALL_ITEM_FROM_CART = 'REMOVE_ALL_ITEM_FROM_CART'
const SEARCH_ITEM = 'SEARCH_ITEM'

const initialState = {
   data: phones,
   shoppingCart: [],
   searchQuery: ''
};

const phoneReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART: {
            return {
                ...state,
                shoppingCart:  [
                ...state.shoppingCart, 
                {
                ...action.phone,
                id: shortid.generate()
                }]
            }
        }

        case REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(t => t.id !== action.id)
            }
        }

        case REMOVE_ALL_ITEM_FROM_CART: {
            return {
                ...state,
                shoppingCart: []
            }
        }

        case SEARCH_ITEM: {
            return {
                ...state,
                searchQuery: action.value
            }
        }
        default:
            return state
    }
}


export const addToCart = (phone) => ({type: 'ADD_ITEM_TO_CART', phone})
export const removeItem = (id) => ({type: 'REMOVE_ITEM_FROM_CART', id})
export const removeAllItems = () => ({type: 'REMOVE_ALL_ITEM_FROM_CART'})
export const searchItem = (value) => ({type: 'SEARCH_ITEM', value})

export default phoneReducer;

