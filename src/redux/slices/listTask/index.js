import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "english",
    titleList: "Активные",
    checked: false,
    timer: { from: 80, to: 150 },
  },
  {
    id: uuid(),
    title: "react",
    titleList: "Активные",
    checked: false,
  },
  {
    id: uuid(),
    title: "redux",
    titleList: "Завершенные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
  {
    id: uuid(),
    title: "vue",
    titleList: "Завершенные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
  {
    id: uuid(),
    title: "express",
    titleList: "Активные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
  {
    id: uuid(),
    title: "mongodb",
    titleList: "Активные",
    checked: false,
    timer: { from: 0, to: 3600 },
  },
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
});

const { actions, reducer } = listTaskSlice;

export const { createTask, toggleTaskChecked, deleteTask } = actions;

export default reducer;
