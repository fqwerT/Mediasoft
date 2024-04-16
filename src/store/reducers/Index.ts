import { combineReducers } from "redux";
import { cartReducer } from "./Cart";

export const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
