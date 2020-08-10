import React, { useState } from "react";
import Task from "./Task";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./Todo.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function getTask(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task === "") {
      alert("Please Enter Task");
    } else {
      setTasks((pre) => {
        return [...pre, task];
      });
    }
    setTask("");
  }

  return (
    <>
      <div id="container">
        <div id="header">
          <h1 className="headtext">Todo App</h1>
        </div>
        <div id="task-list">
          <ol>
            {tasks.map((item) => {
              return <Task value={item}></Task>;
            })}
          </ol>
        </div>
        <div id="controls">
          <input
            id="input"
            placeholder="Enter Task"
            value={task}
            onChange={getTask}
          ></input>{" "}
          <IconButton
            style={{ backgroundColor: "#305973", color: "white" }}
            onClick={addTask}
            aria-label="delete"
          >
            <AddIcon style={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
