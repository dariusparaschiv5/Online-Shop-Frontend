// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch as reduxUseDispatch,
} from "react-redux";

const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Type definitions for the Redux state and dispatch
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Typed hooks that can be used throughout the application
export const useAppDispatch = () => reduxUseDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;