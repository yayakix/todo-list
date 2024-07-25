import Navbar from "./components/base/Navbar";
import TaskList from "./components/base/TaskList";
import usePageStore, { PageTypes } from "./stores/pageStore";


export default function App() {
  const { page } = usePageStore();
  let content;

  switch (page) {
    case PageTypes.HOME:
      content = <TaskList />;
      break;
    case PageTypes.TASK_LIST:
      content = <div>task list Page</div>;
      break;
    // Add more cases as needed
    default:
      content = <div>error Page</div>;
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
