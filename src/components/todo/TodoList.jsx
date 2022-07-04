import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../Redux/features/todoRedux";
import "./TodoList.style.css";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    dispatch(deleteTask(index));
  };
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className="d-flex justify-content-center">
            <ul key={i} className="w-50 p-0">
              <li className="border d-flex items">
                <div className=" m-2">
                  <p className="text-start m-0">
                    <span className="m-0 p-0 text-danger">Title: </span>
                    <span>{todo.title}</span>
                  </p>
                  <p className="text-start m-0">
                    <span className="text-danger">Content: </span>
                    <span>{todo.content}</span>
                  </p>
                  {/* <p>Content : {todo.content}</p> */}
                </div>
                <button
                  className="btn btn-danger ms-auto"
                  onClick={() => {
                    deleteTodo(i);
                  }}
                >
                  X
                </button>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return <div className="text-left mt-4">{todosList}</div>;
};

export default TodoList;
