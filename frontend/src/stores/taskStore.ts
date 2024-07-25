import { create } from "zustand";
import { allTasks } from "./exampletaskdata";

export enum progressTypes {
  IN_PROGRESS = "In Progress",
  PENDING = "Pending",
  COMPLETED = "Completed",
  ARCHIVED = "Archived",
}

type Task = {
  id: number;
  status: progressTypes;
  listContent: string;
};

type TaskStore = {
  tasks: Task[];
  updateTaskStatus: (id: number, status: progressTypes) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: allTasks,
  updateTaskStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      ),
    })),
}));

export default useTaskStore;
