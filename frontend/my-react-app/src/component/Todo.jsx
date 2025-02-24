import "../App.css";
import { useEffect, useState } from "react";
import axiosinstance from "../utils/axiosinstance";
import { Trash2 } from "lucide-react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [selectValue, setSelectValue] = useState("Pending");
  const [todoList, settodoList] = useState([]);
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };
  const options = [
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    try {
      const response = await axiosinstance.post("todo/add-task", {
        task,
        status: selectValue,
      });
      if (response.status === 201 || response.status === 200) {
        console.log("Data saved successfully:", response.data);
        setTask("");
        setSelectValue("Pending");
        getTodo();
      }
    } catch (Error) {
      console.log(Error);
    }
  };
  const getTodo = async () => {
    try {
      const response = await axiosinstance.get("todo");
      if (response) {
        settodoList(response.data);
        console.log(todoList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await axiosinstance.delete("todo/delete-task/" + id);
      if (response) {
        console.log(response.data);
        alert("task deleted");
        getTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div className="todocomponent">
      <h2>Todo List using Node.js and mongoDB</h2>
      <input
        className="todotext"
        size={40}
        placeholder="Enter task..."
        value={task}
        onChange={handleTaskChange}
      />
      <select
        value={selectValue}
        onChange={handleSelectChange}
        className="tododropdown"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="todosave" onClick={handleSubmit}>
        Save
      </button>
      <div className="todo-list">
        <h3>Saved Items</h3>
        {todoList.length > 0 ? (
          <div className="todo-container">
            {todoList.map((todo) => (
              <div key={todo._id} className="todo-item">
                <div className="todo-task">{todo.task}</div>
                <div
                  className={`todo-status ${
                    todo.status === "Pending" ? "pending" : "completed"
                  }`}
                >
                  {todo.status}
                </div>
                <Trash2
                  className="delete-icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No saved tasks</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
