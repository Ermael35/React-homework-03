import { createStore, combineReducers } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({ todo }); // 스토어 & 모듈 연결

const store = createStore(rootReducer);

export default store;
