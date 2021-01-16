import { createSlice } from "@reduxjs/toolkit";
import {
  fetchListTitle,
  createItemListTitle,
  toggleItemListTitle,
  deleteItemListTitle,
} from "../../thunks/listTitle";

const initialState = [{ title: "Активные", active: true }];

const listTitleSlice = createSlice({
  name: "listTitle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListTitle.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
    builder.addCase(createItemListTitle.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
    builder.addCase(toggleItemListTitle.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
    builder.addCase(deleteItemListTitle.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
  },
});

const { actions, reducer } = listTitleSlice;

export const { createItemTitle, setActiveItemTitle, deleteItemTitle } = actions;

export default reducer;
