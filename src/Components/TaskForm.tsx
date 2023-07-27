import React, { useEffect, useState } from "react";

const TaskForm = () => {
  const [taskBody, setTaskBody] = useState<string>("");
  const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>(
    []
  );

  useEffect(() => {
    setTasks(tasks);
  }, []);

  const handleDelete = (task: { task: string; completed: boolean }) => {
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    let newTasks = [...tasks];
    setTasks(newTasks);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (tasks.length === 0) {
      setTasks([
        {
          task: taskBody,
          completed: false,
        },
      ]);
      setTaskBody("");
    } else {
      setTasks([...tasks, { task: taskBody, completed: false }]);
      setTaskBody("");
    }
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
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed?</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => {
            return (
              <tr>
                <td key={i}>{task.task}</td>
                <td>
                  <input type="checkbox" id="myCheck"></input>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(task);
                      console.log(task);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TaskForm;
