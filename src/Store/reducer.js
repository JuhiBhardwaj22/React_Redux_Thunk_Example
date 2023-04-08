import { combineReducers } from "redux";

const intialState = {
  age: 21,
};
const INITAL_STATE = {
  todo: null,
};

const reducerAge = (state = intialState, action) => {
  if (action.type === "Age_Up") {
    return { ...state, age: state.age + 1 };
  } else if (action.type === "Age_Down") {
    return { ...state, age: state.age - 1 };
  } else {
    return state;
  }
};

export const dataReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, todo: action.payload };
    case "DELETE_DATA":
      return INITAL_STATE;
    default:
      return state;
  }
};

const reducers = combineReducers({
  dataReducer,
  reducerAge,
});

export default reducers;
