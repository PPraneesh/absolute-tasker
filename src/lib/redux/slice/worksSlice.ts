import { createSlice } from '@reduxjs/toolkit'
import { WorkType } from "../../types";

interface intialStateType {
  tasks: WorkType[]
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        _id: "1",
        name: "Cutting tree trunks into smaller parts",
        date: "Feb 14, 2024",
        location: "Hyderabad",
        workType: "Remote",
        status: "Open",
        offersCount: 7,
        pay: 10000,
        description: "We need someone to cut tree trunks into smaller parts for easy disposal. The work is remote and can be done at your convenience.",
      },
      {
        _id: "2",
        name: "Website maintenance and bug fixes",
        date: "Mar 5, 2024",
        location: "Bangalore",
        workType: "Remote",
        status: "Open",
        offersCount: 3,
        pay: 15000,
        description: "We are looking for a skilled web developer to maintain our website and fix any bugs. The work is remote and flexible.",
      },
      {
        _id: "3",
        name: "Content writing for marketing campaign",
        date: "Feb 28, 2024",
        location: "Delhi",
        workType: "On-site",
        status: "Open",
        offersCount: 12,
        pay: 8000,
        description:" We need a content writer to create engaging content for our marketing campaign. The work is on-site in Delhi.",
      },
      {
        _id: "4",
        name: "Cutting tree trunks into smaller parts",
        date: "Feb 14, 2024",
        location: "Hyderabad",
        workType: "Remote",
        status: "Open",
        offersCount: 7,
        pay: 10000,
        description: "We need someone to cut tree trunks into smaller parts for easy disposal. The work is remote and can be done at your convenience.",
      },
      {
        _id: "5",
        name: "Website maintenance and bug fixes",
        date: "Mar 5, 2024",
        location: "Bangalore",
        workType: "Remote",
        status: "Open",
        offersCount: 3,
        pay: 15000,
        description: "We are looking for a skilled web developer to maintain our website and fix any bugs. The work is remote and flexible.",
      },
      {
        _id: "6",
        name: "Content writing for marketing campaign",
        date: "Feb 28, 2024",
        location: "Delhi",
        workType: "On-site",
        status: "Open",
        offersCount: 12,
        pay: 8000,
        description:" We need a content writer to create engaging content for our marketing campaign. The work is on-site in Delhi.",
      },
      {
        _id: "1",
        name: "Cutting tree trunks into smaller parts",
        date: "Feb 14, 2024",
        location: "Hyderabad",
        workType: "Remote",
        status: "Open",
        offersCount: 7,
        pay: 10000,
        description: "We need someone to cut tree trunks into smaller parts for easy disposal. The work is remote and can be done at your convenience.",
      },
      {
        _id: "2",
        name: "Website maintenance and bug fixes",
        date: "Mar 5, 2024",
        location: "Bangalore",
        workType: "Remote",
        status: "Open",
        offersCount: 3,
        pay: 15000,
        description: "We are looking for a skilled web developer to maintain our website and fix any bugs. The work is remote and flexible.",
      },
      {
        _id: "3",
        name: "Content writing for marketing campaign",
        date: "Feb 28, 2024",
        location: "Delhi",
        workType: "On-site",
        status: "Open",
        offersCount: 12,
        pay: 8000,
        descriptionription:" We need a content writer to create engaging content for our marketing campaign. The work is on-site in Delhi.",
      },
    ]
  } as intialStateType,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task._id === action.payload._id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
})

export const { 
  addTask,
  removeTask,
  updateTask,
 } = tasksSlice.actions

export default tasksSlice.reducer