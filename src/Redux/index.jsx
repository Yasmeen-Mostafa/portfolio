import { createStore } from "redux";

//{name:"",age:20,addres:""}=profile =>{...profile}
const initialState = {
  todos: [],
};
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
//actions
export const addTaskAction = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const deleteAction = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

//reducer
export const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_TASK) {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  if (action.type === DELETE_TASK) {
    return {
      ...state,
      todos: [
        ...state.todos.filter((e, i) => {
          return i != action.payload;
        }),
      ],
    };
  }
  return state;
};

export const reduxStore = createStore(rootReducer);
