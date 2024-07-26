import { create } from "zustand";
import { allTasks } from "./exampletaskdata";

export enum progressTypes {
  IN_PROGRESS = "In Progress",
  PENDING = "Pending",
  COMPLETED = "Completed",
  ARCHIVED = "Archived",
}

export type TaskType = {
  id: number;
  status: progressTypes;
  title: string;
  description?: string;
};

type TaskStore = {
  tasks: TaskType[];
  updateTaskStatus: (id: number, status: progressTypes) => void;
  addTask: (newTask: TaskType) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: allTasks,
  updateTaskStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      ),
    })),
  addTask: (newTask) => {
    set((state) => {
      return {
        tasks: [...state.tasks, { ...newTask }],
      };
    });
  },
}));

export default useTaskStore;
