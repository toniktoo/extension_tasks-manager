import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
  fetchListTask,
  createItemListTask,
  toggleItemListTask,
  deleteItemListTask,
} from "../../thunks/listTask";

const initialState = [
  // {
  //   id: uuid(),
  //   title: "english",
  //   titleList: "Активные",
  //   checked: false,
  //   timer: { from: 80, to: 150 },
  // },
  // {
  //   id: uuid(),
  //   title: "react",
  //   titleList: "Активные",
  //   checked: false,
  // },
  // {
  //   id: uuid(),
  //   title: "redux",
  //   titleList: "Завершенные",
  //   checked: false,
  //   timer: { from: 0, to: 3600 },
  // },
  // {
  //   id: uuid(),
  //   title: "vue",
  //   titleList: "Завершенные",
  //   checked: false,
  //   timer: { from: 0, to: 3600 },
  // },
  // {
  //   id: uuid(),
  //   title: "express",
  //   titleList: "Активные",
  //   checked: false,
  //   timer: { from: 0, to: 3600 },
  // },
  // {
  //   id: uuid(),
  //   title: "mongodb",
  //   titleList: "Активные",
  //   checked: false,
  //   timer: { from: 0, to: 3600 },
  // },
];

const listTaskSlice = createSlice({
  name: "listTask",
  initialState,
  reducers: {
    createTask(state, action) {
      const { title, titleList } = action.payload;
      state.push({ id: uuid(), title, titleList, checked: false });
    },
    toggleTaskChecked(state, action) {
      const { id } = action.payload;
      return state.reduce((acc, item) => {
        if (item.id === id) {
          const curr = { ...item, checked: !item.checked };
          if (item.checked) return [...acc, curr];
          return [curr, ...acc];
        }
        return [...acc, item];
      }, []);
    },
    deleteTask(state, action) {
      const title = action.payload;

      return state.reduce((acc, item) => {
        const { checked, titleList } = item;
        if (checked && titleList === title) {
          return acc;
        }
        return [...acc, item];
      }, []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListTask.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
    builder.addCase(createItemListTask.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
    builder.addCase(toggleItemListTask.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
    builder.addCase(deleteItemListTask.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
  },
});

const { actions, reducer } = listTaskSlice;

export const { createTask, toggleTaskChecked, deleteTask } = actions;

export default reducer;
