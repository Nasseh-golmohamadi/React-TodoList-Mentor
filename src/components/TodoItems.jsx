import React from "react";

export default function TodoItems({
  item,
  handleCheckChange,
  handleDeleteItem,
}) {
  return (
    <div>
      <input
        type="checkbox"
        id={item.id}
        checked={item.isDone}
        onChange={() => handleCheckChange(item)}
      />
      <label htmlFor={item.id}>
        {item.isDone ? <s>{item.text}</s> : `${item.text}`}
      </label>
      <button onClick={()=> handleDeleteItem(item)}>X</button>
    </div>
  );
}
