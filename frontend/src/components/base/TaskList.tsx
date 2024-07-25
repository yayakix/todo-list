import ProgressTab from "./ProgressTab";
import { defaultAccordionData } from "../../stores/exampletaskdata";


const TaskList = () => {
    return (
        <div id="accordion-open" data-accordion="open">
            {defaultAccordionData.map((progressItem) => (
                <div key={progressItem.id}>
                    <ProgressTab {...progressItem} />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
