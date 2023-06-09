'use client';
import { configureStore } from "@reduxjs/toolkit";
import gameListReducer from "./gameListSlice";

export const store = configureStore({
  reducer: {
    gameList: gameListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

