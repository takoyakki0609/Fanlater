import { createStore } from "redux";
import { CombinedState } from "redux";

const rootReducer = CombinedState({})
const store = createStore(rootReducer)

export default store