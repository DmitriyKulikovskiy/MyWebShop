import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import phoneReducer from "./cart-reducer";
import feedbackReducer from "./feedback-reducer";
import checkOutReducer from "./checkout-reducer";

let reducers = combineReducers({
     phoneReducer,
     feedbackReducer,
     checkOutReducer
});

//tool from Chrome 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;

window.store = store;