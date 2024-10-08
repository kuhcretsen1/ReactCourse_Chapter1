import React from "react";
import useFetch from '../hooks/useFetch';

const ToDoStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      <h2>Task Statistics</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
};

export default ToDoStats;
