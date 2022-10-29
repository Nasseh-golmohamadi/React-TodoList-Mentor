import "./App.css";
import Form from "./components/Form";
import TodoItems from "./components/TodoItems";

import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(handleGetStorage);

  function handleGetStorage() {
    const storageVariable = localStorage.getItem("todos");
    return storageVariable ? JSON.parse(storageVariable) : [];
  }

  function handleSend(todo) {
    updateTodo([...toDo, todo]);
  }

  function updateTodo(todos) {
    setToDo(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleCheckChange(item) {
    const updated = toDo.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    updateTodo(updated);
  }

  function handleDeleteItem(todoList) {
    const updateDelete = toDo.filter((element) => element.id !== todoList.id);
    updateTodo(updateDelete);
  }

  return (
    <>
      <Form handleSend={handleSend} />
      <section>
        {toDo.length ? (
          toDo.map((item) => {
            return (
              <TodoItems
                key={item.id}
                item={item}
                handleCheckChange={handleCheckChange}
                handleDeleteItem={handleDeleteItem}
              />
            );
          })
        ) : (
          <h1>There Is No TodoList</h1>
        )}
      </section>
    </>
  );
}

export default App;
