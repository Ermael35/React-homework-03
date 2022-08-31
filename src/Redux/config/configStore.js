import {createStore, combineReducers} from "redux";
import commen from "../modules/commentSlice"
import todos from "../modules/todos"

const rootReducer = combineReducers({commen: commen.reducer,todos});

const store = createStore(rootReducer);

export default store;