import { useState, ChangeEvent, FormEvent } from "react";
import './AddTaskList.css';

type AddTaskListProps = {
  addTaskList: (title: string, tasks: string[]) => void;
};

const AddTaskList = ({ addTaskList }: AddTaskListProps) => {
  const [title, setTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() && tasks.length > 0) {
      addTaskList(title.trim(), tasks);
      setTitle("");
      setTasks([]);
      setTaskInput("");
    }
  };

  return (
    <div className="add-task-list-container">
      <h2>Add New Task List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task list title..."
          value={title}
          onChange={handleTitleChange}
        />
        <div className="task-input-container">
          <input
            type="text"
            placeholder="Enter a task..."
            value={taskInput}
            onChange={handleTaskInputChange}
          />
          <button type="button" onClick={handleAddTask}>Add Task</button>
        </div>
        <ul className="task-list-preview">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button type="submit">Add Task List</button>
      </form>
    </div>
  );
};

export default AddTaskList;
