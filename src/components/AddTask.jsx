import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    // Logic to add task
    console.log("Task added:", taskName);
    setTaskName("");
  };

  return (
    <div className="flex items-center mb-4">
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        className="mr-2"
      />
      <Button onClick={addTask}>Add Task</Button>
    </div>
  );
};

export default AddTask;