import { create } from "zustand";
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
  deleteTask: (id: number) => void; // New method for deleting tasks
};

const LOCAL_STORAGE_KEY = "tasks";

const getInitialTasks = (): TaskType[] => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
};

const saveTasksToLocalStorage = (tasks: TaskType[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: getInitialTasks(),
  updateTaskStatus: (id, status) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    }),
  updateTaskTheme: (id, themeName) => {
    const { themes } = useThemeStore.getState();
    const theme = themes.find((t) => t.themeName === themeName);

    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, theme: theme } : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  addTask: (newTask) => {
    set((state) => {
      const updatedTasks = [...state.tasks, newTask];
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  deleteTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
}));

export default useTaskStore;
