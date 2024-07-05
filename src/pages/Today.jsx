import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

const Today = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Today;