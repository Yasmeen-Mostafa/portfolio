import { useState } from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import React from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTaskAction, deleteAction } from "../../Redux";
function Todo() {
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
