import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; 
import loginReducer from "./reducers/LoginReducer";
import customerReducer from "./reducers/CustomerReducer";

const composeEnhancers =
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const reducer = combineReducers({
    login: loginReducer,
    customer: customerReducer,
});

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
