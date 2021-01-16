import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers";

export default function configureAppStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    // eslint-disable-next-line no-shadow
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    preloadedState,
  });
}

export const store = configureAppStore();
