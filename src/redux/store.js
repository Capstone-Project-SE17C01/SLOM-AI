import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { SignReducer, TopSignUsersReducer } from "./reducer/signReducer";

const reducer = combineReducers({
  signData: SignReducer,
  topUsers: TopSignUsersReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
