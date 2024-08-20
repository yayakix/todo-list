import { useState } from "react";
import TaskListItem from "./TaskListItem";
import useTaskStore from "../../stores/taskStore";

type progressItem = {
    id: number;
    title: string;
}

const ProgressTab = (progressItem: progressItem) => {
    const { tasks } = useTaskStore();

    // Initialize openAccordions with the current progressItem.id
    const [openAccordions, setOpenAccordions] = useState<number[]>([progressItem.id]);

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
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-[#1A5319] border border-b-0 border-gray-200 rounded-t-xl gap-3 bg-[#ACE1AF]"
                    onClick={() => toggleAccordion(progressItem.id)}
                    aria-expanded={openAccordions.includes(progressItem.id)}
                    aria-controls={`accordion-open-body-${progressItem.id}`}
                >
                    <span className="flex items-center">{progressItem.title}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transition-transform duration-200 ${openAccordions.includes(progressItem.id) ? "rotate-180" : "rotate-0"} shrink-0`}
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
                className={`${openAccordions.includes(progressItem.id) ? "block" : "hidden"}`}
                aria-labelledby={`accordion-open-heading-${progressItem.id}`}
            >
                <div className="p-5 border border-b-0 border-gray-200 ">
                    <div className="mb-2 text-gray-500 ">
                        <ul className="text-sm font-medium text-gray-900">
                            {tasks.map((listItem) => {
                                if (listItem.status === progressItem.title) {
                                    return (
                                        <TaskListItem key={listItem.id} {...listItem} />
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressTab;
