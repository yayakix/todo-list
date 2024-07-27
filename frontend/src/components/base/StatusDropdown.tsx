import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { progressTypes, TaskType } from '../../stores/taskStore';

interface StatusDropdownProps {
    onSelectStatus: (status: any) => void;
    listItem: TaskType;
    dropdownOptions: string[] | progressTypes[];
    defaultText: string;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ onSelectStatus, listItem, dropdownOptions, defaultText }) => {
    // const [selectedStatus, setSelectedStatus] = useState('');
    const handleSelect = (status: string | progressTypes) => {
        console.log(status)
        if (status !== listItem.status) {
            // setSelectedStatus(status);
            onSelectStatus(status); // Pass selected status to parent component
        }
    };

    return (
        <Menu as="div" className="relative inline-block text-left" >
            <div className=''>
                <MenuButton style={{ border: `1px solid ${listItem.theme?.accent}` }} className={` inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${listItem.theme?.secondary} `}>
                    <span className={`${listItem.theme?.text}`}>
                        {defaultText}

                    </span>
                    <ChevronDownIcon aria-hidden="true" className={`-mr-1 h-5 w-5 text-gray-400 ${listItem.theme?.accent}`} />
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1 bg-red-400">
                    {dropdownOptions.map((item, idx) => (
                        <MenuItem key={idx}>
                            <span
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                                onClick={() => handleSelect(item)}
                            >
                                {String(item)}
                            </span>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    );
}

export default StatusDropdown;
