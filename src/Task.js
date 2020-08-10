import React from "react";
import "./Task.css";

export default function Task(props) {
  function deleteTask(e) {
    e.target.parentElement.parentElement.remove();
  }

  return (
    <>
      <li>
        <div className="list">
          <p>{props.value}</p>
          <h4 onClick={deleteTask}>X</h4>
        </div>
      </li>
    </>
  );
}
