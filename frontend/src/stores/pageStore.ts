import { create } from "zustand";

export enum PageTypes {
  HOME = "HOME",
  TASK_LIST = "TASK_LIST",
}
export type PageStore = {
  page: string;
  prevPage: string;
  updatePage: (newPage: string) => void;
};

const usePageStore = create<PageStore>((set) => ({
  page: "start",
  prevPage: "",
  updatePage: (newPage) =>
    set((state) => ({
      prevPage: state.page,
      page: newPage,
      // Example of updating prevPage as well
    })),
  //   updatePage: (newPage) => set({ page: newPage }),
  //   updatePrevPage: () => set((state) => ({ prevPage: state.page })),
}));

export default usePageStore;
