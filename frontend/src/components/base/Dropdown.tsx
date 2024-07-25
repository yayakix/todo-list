import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { progressTypes } from '../../stores/taskStore';

const Dropdown = ({ onSelectStatus, listItem }) => {
    console.log(listItem)
    const dropdownOptions = [progressTypes.ARCHIVED, progressTypes.COMPLETED, progressTypes.IN_PROGRESS, progressTypes.PENDING];
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleSelect = (status) => {
        setSelectedStatus(status);
        onSelectStatus(status); // Pass selected status to parent component
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedStatus || listItem.status}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {dropdownOptions.map((item, idx) => (
                        <MenuItem key={idx}>
                            <span
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </span>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    );
}

export default Dropdown;
