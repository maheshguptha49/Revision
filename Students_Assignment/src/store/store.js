import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { studentsReducer } from "./students/reducer";
const logger1 = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  } else {
    next(action);
  }
};
const rootreducer = combineReducers({
  auth: authReducer,
  students: studentsReducer
});
const enchancers = compose(
  applyMiddleware(logger1),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(rootreducer, enchancers);
