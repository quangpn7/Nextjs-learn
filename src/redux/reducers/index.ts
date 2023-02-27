import { Store } from "redux";
import toDoReducer, { toDoReducerType } from "./toDoReducer";
import userSlice, { userReducerType } from "./userSlice";

export type RootReducer = {
  rootUser: userReducerType;
  rootToDo: toDoReducerType;
};

const rootReducer = {
  rootUser: userSlice,
  rootToDo: toDoReducer,
};

// export default RootState     =
export default rootReducer;
