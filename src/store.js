import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; 
import loginReducer from "./reducers/LoginReducer";
import customerReducer from "./reducers/CustomerReducer";


 const reducer = combineReducers({
    login: loginReducer,
    customer: customerReducer,
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (next) => next
    )
);
export default store;
