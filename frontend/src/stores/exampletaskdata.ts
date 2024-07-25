enum progressTypes {
  IN_PROGRESS = "In Progress",
  PENDING = "Pending",
  COMPLETED = "Completed",
  ARCHIVED = "Archived",
}

export const defaultAccordionData = [
  {
    id: 1,
    title: progressTypes.IN_PROGRESS,
  },
  {
    id: 2,
    title: progressTypes.PENDING,
  },
  {
    id: 3,
    title: progressTypes.COMPLETED,
  },
  {
    id: 4,
    title: progressTypes.ARCHIVED,
  },
];

export const allTasks = [
  {
    id: 41,
    status: progressTypes.ARCHIVED,
    listContent:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    id: 42,
    status: progressTypes.ARCHIVED,

    listContent:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    id: 43,
    status: progressTypes.PENDING,
    listContent:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    id: 12,
    status: progressTypes.IN_PROGRESS,
    listContent:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    id: 31,
    status: progressTypes.COMPLETED,
    listContent:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    id: 21,
    status: progressTypes.PENDING,
    listContent:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
];
