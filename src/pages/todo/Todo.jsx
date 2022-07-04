import { useState } from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import React from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTaskAction, deleteAction } from "../../Redux";
function Todo() {
  return (
    <div className="text-center todo-wrapper todo  position-relative">
      <h1 className="mt-2">Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
