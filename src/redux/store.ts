import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import directoriesReducer from "./features/directory-slice";

export const store = configureStore({
    reducer: {
        directoriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
