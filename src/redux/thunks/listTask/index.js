import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";

export const fetchListTask = createAsyncThunk(
  "listTask/fetchListTask",
  async () => {
    const response = await api.fetchListTaskApi();
    return response;
  }
);

export const createItemListTask = createAsyncThunk(
  "listTask/createItemListTask",
  async (title) => {
    const response = await api.createItemListTaskApi(title);
    return response;
  }
);

export const toggleItemListTask = createAsyncThunk(
  "listTask/toggleItemListTask",
  async (index) => {
    const response = await api.toggleItemListTaskApi(index);
    return response;
  }
);

export const deleteItemListTask = createAsyncThunk(
  "listTask/deleteItemListTask",
  async (title) => {
    const response = await api.deleteItemListTaskApi(title);
    return response;
  }
);
