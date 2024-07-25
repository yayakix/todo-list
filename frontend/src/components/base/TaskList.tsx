import React, { useState } from "react";
import Dropdown from "./Dropdown";
enum progressTypes {
    IN_PROGRESS = 'In Progress',
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    ARCHIVED = 'Archived'
}

const TaskList = () => {
    const defaultAccordionData = [
        {
            id: 1,
            title: progressTypes.IN_PROGRESS,
            content: [
                {
                    id: 1,
                    status: progressTypes.IN_PROGRESS,
                    listContent:
                        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                },
            ],
        },
        {
            id: 2,
            title: progressTypes.PENDING,
            content: [
                {
                    id: 1,
                    status: progressTypes.PENDING,
                    listContent:
                        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                },
            ],
        },
        {
            id: 3,
            title: progressTypes.COMPLETED,
            content: [
                {
                    id: 1,
                    status: progressTypes.COMPLETED,
                    listContent:
                        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                },
            ],
        },
        {
            id: 4,
            title: progressTypes.ARCHIVED,
            content: [
                {
                    id: 1,
                    status: progressTypes.ARCHIVED,
                    listContent:
                        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                },
                {
                    id: 2,
                    status: progressTypes.ARCHIVED,

                    listContent:
                        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                },
                {
                    id: 3,
                    status: progressTypes.ARCHIVED,
                    listContent:
                        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                },
            ],
        },
    ];

    // State to manage which accordion items are open
    const [openAccordions, setOpenAccordions] = useState([]);

    // Function to toggle accordion items
    const toggleAccordion = (accordionId: number) => {
        if (openAccordions.includes(accordionId)) {
            setOpenAccordions(openAccordions.filter((id) => id !== accordionId)); // Close the accordion if it's already open
        } else {
            setOpenAccordions([...openAccordions, accordionId]); // Open the accordion
        }
    };
    const handleStatusChange = (taskId, status) => {
        // Update the status of the task with taskId
        setTasks(tasks.map(task => task.id === taskId ? { ...task, status: status } : task));
    };

    return (
        <div id="accordion-open" data-accordion="open">
            {defaultAccordionData.map((item) => (
                <div key={item.id}>
                    <h2 id={`accordion-open-heading-${item.id}`}>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 bg-slate-100"
                            onClick={() => toggleAccordion(item.id)}
                            aria-expanded={openAccordions.includes(item.id)}
                            aria-controls={`accordion-open-body-${item.id}`}
                        >
                            <span className="flex items-center">{item.title}</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 rotate-${openAccordions.includes(item.id) ? "0" : "180"
                                    } shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-open-body-${item.id}`}
                        className={`${openAccordions.includes(item.id) ? "block" : "hidden"
                            }`}
                        aria-labelledby={`accordion-open-heading-${item.id}`}
                    >
                        <div className="p-5 border border-b-0 border-gray-200 ">
                            <p className="mb-2 text-gray-500 ">
                                <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                                    {item.content.map((itemContent) => {
                                        return (
                                            <li key={itemContent.id} className="w-full border-b border-gray-200 rounded-t-lg mt-4 flex items-center justify-between">
                                                <div className="flex flex-row items-center">
                                                    <label
                                                        htmlFor="vue-checkbox"
                                                        className="py-3 ms-2 text-sm font-medium text-gray-900"
                                                    >
                                                        {itemContent.listContent}
                                                    </label>
                                                </div>
                                                <div className="mx-4">
                                                    <Dropdown onSelectStatus={(status) => handleStatusChange(task.id, status)} />
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
