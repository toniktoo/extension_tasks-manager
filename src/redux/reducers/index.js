import { combineReducers } from "redux";
import listTitleReducer from "../slices/listTitle";
import listTaskReducer from "../slices/listTask";

const rootReducer = combineReducers({
  listTitle: listTitleReducer,
  listTask: listTaskReducer,
});

export default rootReducer;
