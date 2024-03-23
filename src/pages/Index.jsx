import React, { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Todo App</h1>
      <div className="flex justify-center mb-4">
        <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mr-2" placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addTodo}>
          <FaPlus />
        </button>
      </div>
      <ul className="list-none text-center">
        {todos.map((todo, index) => (
          <li key={index} className="bg-white shadow-md rounded px-6 pt-4 pb-2 mb-4 flex justify-between items-center">
            <span className="text-grey-darker">{todo}</span>
            <button className="text-red-500 hover:text-red-700" onClick={() => deleteTodo(index)}>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
