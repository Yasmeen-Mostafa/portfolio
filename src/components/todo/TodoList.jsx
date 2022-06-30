import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAction } from "../../Redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    dispatch(deleteAction(index));
  };
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex">
              <div className="text">
                <p>Title : {todo.title}</p>
                <p>Content : {todo.content}</p>
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
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
