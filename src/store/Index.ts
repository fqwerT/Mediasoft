import { applyMiddleware, createStore } from "redux";
// import { cartReducer } from "./reducers/Cart";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/Index";
export const store = createStore(rootReducer,applyMiddleware(thunk))