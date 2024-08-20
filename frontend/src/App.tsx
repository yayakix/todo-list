import Navbar from "./components/base/Navbar";
// import TaskList from "./components/base/TaskList";
import NewTask from "./components/pages/NewTask";
// import NewTheme from "./components/pages/NewTheme";
import TaskPage from "./components/pages/TaskPage";
import usePageStore, { PageTypes } from "./stores/pageStore";


export default function App() {
  const { page } = usePageStore();
  let content;

  switch (page) {
    case PageTypes.HOME:
      content = <TaskPage />;
      break;
    // case PageTypes.TASK_LIST:
    //   content = <div>task list Page</div>;
    //   break;
    case PageTypes.NEW_TASK:
      content = <NewTask />;
      break;
    // case PageTypes.NEW_THEME:
    //   content = <NewTheme />;
    //   break;
    // Add more cases as needed
    default:
      content = <TaskPage />;
  }

  return (
    <header>
      <div>
        <Navbar />
        {content}
      </div>
    </header>
  )
}
