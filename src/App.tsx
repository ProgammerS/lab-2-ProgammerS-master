import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";
import Search from "./Search";
import AddTaskList from "./AddTaskList";

const initialTaskList = [
  {
    title: "Humber",
    tasks: ["Task 1", "Task 2", "Task 3"],
    id: 1,
  },
  {
    title: "MERN",
    tasks: ["Lab", "Project", "Quiz"],
    id: 2,
  },
  {
    title: "Java",
    tasks: ["Group Discussion", "Exam", "Assignment"],
    id: 3,
  },
];

let nextId = initialTaskList.length + 1;

function App() {
  const [tasklist, setTaskList] = useState(initialTaskList);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteTaskList = (id: number) => {
    setTaskList(tasklist.filter((group) => group.id !== id));
  };

  const addTaskList = (title: string, tasks: string[]) => {
    setTaskList([
      ...tasklist,
      {
        title,
        tasks,
        id: nextId++,
      },
    ]);
  };

  const filteredTaskList = tasklist.filter((group) =>
    group.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTaskList addTaskList={addTaskList} />
      <TaskList tasklist={filteredTaskList} deleteTaskList={deleteTaskList} />
    </div>
  );
}

export default App;
