import React from "react";
import StatusDropdown from "./StatusDropdown";
import useTaskStore, { progressTypes, TaskType } from "../../stores/taskStore";
import { themeNames } from "../../stores/themeStore";


const TaskListItem: React.FC<TaskType> = (listItem) => {
    const dropdownOptions = [progressTypes.ARCHIVED, progressTypes.COMPLETED, progressTypes.IN_PROGRESS, progressTypes.PENDING];
    const themeOptions = [themeNames.LIGHT, themeNames.DARK,]
    const { updateTaskStatus, updateTaskTheme } = useTaskStore()

    const handleStatusChange = (status: progressTypes) => {
        updateTaskStatus(listItem.id, status);
    };
    const handleThemeChange = (theme: themeNames) => {
        updateTaskTheme(listItem.id, theme)

    }
    console.log(listItem.theme?.primary)
    return (
        <li key={listItem.id} className={`w-full border-b border-gray-200 rounded-t-lg mt-4 flex items-center justify-between bg-[${listItem.theme?.primary}]`}>
            <div className="flex flex-row items-center">
                <label htmlFor="vue-checkbox" className="py-3 ms-2 text-sm font-medium text-gray-900">
                    <h2 className="font-bold mb-2">{listItem.title}</h2>
                    {listItem.description}
                </label>
            </div>
            <div className="mx-4 flex no-wrap">
                <StatusDropdown onSelectStatus={handleStatusChange} listItem={listItem} dropdownOptions={dropdownOptions} defaultText={'update'} />
                <StatusDropdown onSelectStatus={handleThemeChange} listItem={listItem} dropdownOptions={themeOptions} defaultText={'\u270E'} />
            </div>
        </li>
    );
};

export default TaskListItem;
