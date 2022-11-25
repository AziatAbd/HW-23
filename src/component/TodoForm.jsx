import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 } from "uuid";

const TodoForm = () => {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();

    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };

    dispatch(addTodo(todo));
    setTodoValue("");
  };

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };


  console.log(todos);

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={todoValue}
          onChange={handleChange}
          placeholder="Add task"
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoForm;
