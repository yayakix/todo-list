import { useState } from "react";
import TaskListItem from "./TaskListItem";
// import { allTasks } from "../../stores/exampletaskdata";
import useTaskStore, { progressTypes } from "../../stores/taskStore";

type progressItem = {
    id: number;
    title: string;
}

const ProgressTab = (progressItem: progressItem) => {
    const { tasks } = useTaskStore()

    const [openAccordions, setOpenAccordions] = useState<{}[]>([]);

    const toggleAccordion = (accordionId: number) => {
        if (openAccordions.includes(accordionId)) {
            setOpenAccordions(openAccordions.filter((id) => id !== accordionId)); // Close the accordion if it's already open
        } else {
            setOpenAccordions([...openAccordions, accordionId]); // Open the accordion
        }
    };
    return (
        <>
            <h2 id={`accordion-open-heading-${progressItem.id}`}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 bg-slate-100"
                    onClick={() => toggleAccordion(progressItem.id)}
                    aria-expanded={openAccordions.includes(progressItem.id)}
                    aria-controls={`accordion-open-body-${progressItem.id}`}
                >
                    <span className="flex items-center">{progressItem.title}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-${openAccordions.includes(progressItem.id) ? "0" : "180"
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
                id={`accordion-open-body-${progressItem.id}`}
                className={`${openAccordions.includes(progressItem.id) ? "block" : "hidden"
                    }`}
                aria-labelledby={`accordion-open-heading-${progressItem.id}`}
            >
                <div className="p-5 border border-b-0 border-gray-200 ">
                    <div className="mb-2 text-gray-500 ">
                        <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                            {tasks.map((listItem) => {
                                if (listItem.status === progressItem.title) {
                                    return (
                                        <TaskListItem {...listItem} />
                                    );
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProgressTab;
