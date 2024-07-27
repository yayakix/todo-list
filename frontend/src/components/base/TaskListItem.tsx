import React from "react";
import StatusDropdown from "./StatusDropdown";
import useTaskStore, { progressTypes, TaskType } from "../../stores/taskStore";
import useThemeStore from "../../stores/themeStore";

const TaskListItem: React.FC<TaskType> = (listItem) => {
    const { themes } = useThemeStore()
    const { updateTaskStatus, updateTaskTheme } = useTaskStore()

    const dropdownOptions = [progressTypes.ARCHIVED, progressTypes.COMPLETED, progressTypes.IN_PROGRESS, progressTypes.PENDING];
    const themeOptions = themes.map((theme) => theme.themeName)

    const handleStatusChange = (status: progressTypes) => {
        updateTaskStatus(listItem.id, status);
    };
    const handleThemeChange = (theme: string) => {
        updateTaskTheme(listItem.id, theme)

    }

    const themeStyles = {
        bgColor: listItem.theme?.background,
        textColor: listItem.theme?.text,
        borderColor: listItem.theme?.accent,
        primaryColor: listItem.theme?.primary,
        secondaryColor: listItem.theme?.secondary,
    }

    return (
        <li key={listItem.id} className={`w-full rounded-t-lg mt-4 flex items-center justify-between `} style={{ backgroundColor: listItem.theme?.background }}>
            <div className="flex flex-row items-center" >
                <label htmlFor="vue-checkbox" className="py-3 ms-2 text-sm font-medium text-gray-900">
                    <h2 className={`font-bold mb-2 ${listItem.theme?.text}`}>{listItem.title}</h2>
                    <p className={`${listItem.theme?.text}`}>
                        {listItem.description}
                    </p>
                </label>
            </div>
            <div className="mx-4 flex gap-1">
                <StatusDropdown onSelectStatus={handleStatusChange} listItem={listItem} dropdownOptions={dropdownOptions} defaultText={'update'} />
                <StatusDropdown onSelectStatus={handleThemeChange} listItem={listItem} dropdownOptions={themeOptions} defaultText={'\u270E'} />
            </div>
        </li>
    );
};

export default TaskListItem;
