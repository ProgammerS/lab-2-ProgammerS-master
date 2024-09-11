import './TaskList.css';

type TaskListProps = {
  tasklist: {
    title: string;
    tasks: string[];
    id: number;
  }[];
  deleteTaskList: (id: number) => void;
};

const TaskList = ({ tasklist, deleteTaskList }: TaskListProps) => {
  let totalTasks = 0;
  tasklist.forEach((group) => {
    totalTasks += group.tasks.length;
  });

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <h2>Total Number of Tasks: {totalTasks}</h2>
      {tasklist.map((group) => (
        <div className="task-group" key={group.id}>
          <h3>{group.title}</h3>
          <button className="delete-btn" onClick={() => deleteTaskList(group.id)}>Delete</button>
          <ul>
            {group.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
