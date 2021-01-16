import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";

export const fetchListTitle = createAsyncThunk(
  "listTitle/fetchListTitle",
  async () => {
    const response = await api.fetchListTitleApi();
    return response;
  }
);

export const createItemListTitle = createAsyncThunk(
  "listTitle/createItemListTitle",
  async (title) => {
    const response = await api.createItemListTitleApi(title);
    return response;
  }
);

export const toggleItemListTitle = createAsyncThunk(
  "listTitle/toggleItemListTitle",
  async (index) => {
    const response = await api.toggleItemListTitleApi(index);
    return response;
  }
);

export const deleteItemListTitle = createAsyncThunk(
  "listTitle/deleteItemListTitle",
  async (title) => {
    const response = await api.deleteItemListTitleApi(title);
    return response;
  }
);
