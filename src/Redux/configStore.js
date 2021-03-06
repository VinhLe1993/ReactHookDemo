import { applyMiddleware, combineReducers, createStore } from "redux";
import { FakeBookReducer } from "./Reducers/FakeBookReducer";
import { PhimReducer } from "./Reducers/PhimReducer";

//Cấu hình middleware (Để có thể dispatch redux 1 action là function)
import thunk from "redux-thunk";
import { ModalReducer } from "./Reducers/ModalReducer";

const rootReducer = combineReducers({
  //Khai báo reducer
  FakeBookReducer,
  PhimReducer,
  ModalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
