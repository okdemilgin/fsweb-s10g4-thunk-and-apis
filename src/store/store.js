import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";



export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);