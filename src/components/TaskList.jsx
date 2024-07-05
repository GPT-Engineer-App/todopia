import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", completed: false },
    { id: 2, name: "Sample Task 2", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-2 border-b"
        >
          <div className="flex items-center">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              className={`ml-2 ${task.completed ? "line-through" : ""}`}
            >
              {task.name}
            </span>
          </div>
          <button onClick={() => deleteTask(task.id)}>
            <Trash className="h-4 w-4 text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;