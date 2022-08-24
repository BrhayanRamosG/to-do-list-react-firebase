import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../../../interfaces/store";

// Define the initial state using that type
const initialState: TaskState = {
  value: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    someReducerOne: (state) => {
      //
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    someReducerTwo: (state, action: PayloadAction<string>) => {
      //
    },
  },
});

export const { someReducerOne, someReducerTwo } = taskSlice.actions;
