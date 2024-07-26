import React from "react";
import StatusDropdown from "./StatusDropdown";
import useTaskStore, { progressTypes, TaskType } from "../../stores/taskStore";
import useThemeStore, { themeNames } from "../../stores/themeStore";


const TaskListItem: React.FC<TaskType> = (listItem) => {
    const dropdownOptions = [progressTypes.ARCHIVED, progressTypes.COMPLETED, progressTypes.IN_PROGRESS, progressTypes.PENDING];
    const themeOptions = [themeNames.LIGHT, themeNames.DARK]

    const { themes } = useThemeStore()
    console.log(themes)
    const { updateTaskStatus } = useTaskStore()

    const handleStatusChange = (status: progressTypes) => {
        updateTaskStatus(listItem.id, status);
    };

    const handleThemeChange = (theme) => {
        console.log('hi')
    }

    // const themeOptions = [
    //     themeNames.LIGHT,
    //     themeNames.DARK,
    //     themeNames.SOLARIZED_LIGHT,
    //     themeNames.SOLARIZED_DARK,
    // ];
    return (
        <li key={listItem.id} className="w-full border-b border-gray-200 rounded-t-lg mt-4 flex items-center justify-between">
            <div className="flex flex-row items-center">
                <label htmlFor="vue-checkbox" className="py-3 ms-2 text-sm font-medium text-gray-900">
                    <h2 className="font-bold mb-2">{listItem.title}</h2>
                    {listItem.description}
                </label>
            </div>
            <div className="mx-4 flex no-wrap">
                <StatusDropdown onSelectStatus={handleStatusChange} listItem={listItem} dropdownOptions={dropdownOptions} defaultText={'update'} />
                {/* <StatusDropdown onSelectStatus={handleThemeChange} listItem={listItem} dropdownOptions={themeOptions} defaultText={'\u2600'} /> */}
            </div>
        </li>
    );
};

export default TaskListItem;
