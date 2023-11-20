import { combineReducers, createStore } from "redux";

import Fanletter from "redux/modules/Fanletter";

const rootReducer = combineReducers({
    Fanletter,
})
const store = createStore(rootReducer)

export default store