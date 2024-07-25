import React from "react";
import Dropdown from "./Dropdown";
import useTaskStore, { progressTypes } from "../../stores/taskStore";

type TaskListItemProps = {
    id: number;
    listContent: string;
    status: progressTypes;

};

const TaskListItem: React.FC<TaskListItemProps> = (listItem) => {
    const { updateTaskStatus } = useTaskStore()


    const handleStatusChange = (status: progressTypes) => {
        console.log('listitem:', listItem)
        console.log('status:', status)

        updateTaskStatus(listItem.id, status);
    };

    return (
        <li key={listItem.id} className="w-full border-b border-gray-200 rounded-t-lg mt-4 flex items-center justify-between">
            <div className="flex flex-row items-center">
                <label htmlFor="vue-checkbox" className="py-3 ms-2 text-sm font-medium text-gray-900">
                    {listItem.listContent}
                </label>
            </div>
            <div className="mx-4">

                <Dropdown onSelectStatus={handleStatusChange} listItem={listItem} />
            </div>
        </li>
    );
};

export default TaskListItem;
