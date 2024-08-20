import TaskList from "../base/TaskList";
import NewTask from "./NewTask";

const TaskPage = () => {
    return (
        <div>
            <div className="flex flex-col">
                <NewTask />
            </div>
            <TaskList />
        </div>
    )
}

export default TaskPage;