import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer/appReducer";


const root = combineReducers({
    auth: appReducer,
  });
export const store= legacy_createStore(root,applyMiddleware(thunk))