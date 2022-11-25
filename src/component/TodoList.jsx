import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../store/todoSlice";
import "./sad.css"



const TodoList = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const toggleTodoHandler = (id) => {
    dispatch(completedTodo(id));
  };

  return (
    <div>
      <button  onClick={() => toggleTodoHandler(todo.id)}>Completed</button>
      <span className={todo.completed ? 'line-through' : ""}> {todo.text} </span>
      <button onClick={() => removeTodoHandler(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoList;
