import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "Активные", active: true },
  { title: "Завершенные", active: false },
];

const listTitleSlice = createSlice({
  name: "listTitle",
  initialState,
  reducers: {
    createItemTitle(state, action) {
      const title = action.payload;

      state.push({ title, active: false });
    },
    setActiveItemTitle(state, action) {
      const index = action.payload;
      // делаем неактивным item
      const prevActiveItemIndex = state.findIndex(({ active }) => active);
      state[prevActiveItemIndex].active = false;
      // делаем активным item
      state[index].active = true;
    },
    deleteItemTitle(state, action) {
      const title = action.payload;
      const _ = state.filter((item) => item.title !== title);
      _[0] = { title: "Активные", active: true };
      return _;
    },
  },
});

const { actions, reducer } = listTitleSlice;

export const { createItemTitle, setActiveItemTitle, deleteItemTitle } = actions;

export default reducer;
