import React from "react";
import { useState } from "react";

export default function Form({ handleSend }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(!input){return alert('َAdd a Task in Input')}
    handleSend({ text: input, isDone: false, id: Math.random() });
    setInput("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Add Your Task Which You're About To Do Today</h3>
        <label htmlFor="mainInput">Right Here: </label>
        <input
          type="text"
          id="mainInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
