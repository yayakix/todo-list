import { create } from "zustand";
import { allTasks } from "./exampletaskdata";
import useThemeStore, { ThemeType } from "./themeStore";

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
  theme?: ThemeType;
};

type TaskStore = {
  tasks: TaskType[];
  updateTaskStatus: (id: number, status: progressTypes) => void;
  updateTaskTheme: (id: number, theme: string) => void;
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
  updateTaskTheme: (id, themeName) => {
    // Access the theme from useThemeStore
    const { themes } = useThemeStore.getState();
    const theme = themes.find((t) => t.themeName === themeName);

    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, theme: theme } : task
      ),
    }));
  },
  addTask: (newTask) => {
    set((state) => {
      return {
        tasks: [...state.tasks, { ...newTask }],
      };
    });
  },
}));

export default useTaskStore;
