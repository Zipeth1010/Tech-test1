import React, { useState } from "react";

const TaskForm = () => {
  const [taskBody, setTaskBody] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (tasks.length === 0) {
      setTasks([taskBody]);
      setTaskBody("");
    } else {
      setTasks([...tasks, taskBody]);
      setTaskBody("");
    }
    console.log(tasks);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskInput">Task:</label>
        <input
          id="taskInput"
          placeholder="Insert Task"
          value={taskBody}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTaskBody(event.target.value);
          }}
        ></input>
        <button type="submit">Add Task!</button>
      </form>
      <h3>{tasks.length} Tasks to do!</h3>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              {task}
              <input type="checkbox"></input>
            </li>
          );
        })}
      </ul>
      <h3>Completed tasks!</h3>
    </section>
  );
};

export default TaskForm;
