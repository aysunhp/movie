import React from "react";
import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      return {
        value: action.value,
        todos: state.todos,
      };
    case "addTodo":
      return {
        value: "",
        todos: [...state.todos, action.value],
      };
    case "reset":
      return {
        value: "",
        todos: [],
      };
    case "delete":
      return {
        value: state.value,
        todos: action.todos,
      };
    default:
      break;
  }
}
function Todo() {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    todos: [],
  });
  return (
    <>
      <input
        type="text"
        value={state.value}
        placeholder="Enter new todo"
        onChange={(e) => {
          dispatch({ value: e.target.value, type: "setValue" });
        }}
      />
      <button
        style={{ backgroundColor: "lightgray" }}
        onClick={() => {
          dispatch({ value: state.value, type: "addTodo" });
        }}
      >
        Add
      </button>
      <button
        style={{ backgroundColor: "lightgray" }}
        onClick={() => {
          dispatch({ value: state.value, type: "reset" });
        }}
      >
        Delete All
      </button>
      <ul>
        {state.todos &&
          state.todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo}
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  id={i}
                  onClick={(e) => {
                    let newTodos = state.todos.filter(
                      (elem, i) => i != e.currentTarget.getAttribute("id")
                    );
                    console.log(newTodos);
                    dispatch({ todos: newTodos, type: "delete" });
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Todo;
