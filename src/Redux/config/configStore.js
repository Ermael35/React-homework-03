import {createStore, combineReducers} from "redux";
import commen from "../modules/commentSlice"

const rootReducer = combineReducers({commen: commen.reducer});

const store = createStore(rootReducer);

export default store;