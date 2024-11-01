import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState();
  const [todoApp, setTodoApp] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    setTodoApp((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  const deleteHandler = (task) => {
    const removedTask = todoApp.filter((list) => list !== task);
    setTodoApp(removedTask);
  };

  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <div style={{width: "600px"}} className="bg-dark rounded-3 text-white p-3 shadow">
          <h1 className="text-center mb-4 text-primary">To-Do List</h1>
          <form className="d-flex mb-3" onSubmit={formHandler}>
            <input
              value={inputValue}
              className="form-control py-2 rounded"
              type="text"
              id="taskInput"
              placeholder="Add your task..."
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="btn bg-primary text-white w-25 ms-2"
              type="submit"
            >
              Add Task
            </button>
          </form>
          <div className="rounded-3">
            {todoApp.map((task, index) => (
              <div
                className="second-input d-flex justify-content-between align-items-center p-2"
                style={{
                  borderBottom: "1px solid #ccc",
                }}
                key={index}
              >
                <h5>{task}</h5>
                <button
                  onClick={() => deleteHandler(task)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
