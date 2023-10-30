import IDirectory, { IFile } from "@/app/interfaces/IDirectory";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DirectoryState {
    directoriesList: IFile[] | undefined;
    activeDirectory: IFile | null;
}

const initialState: DirectoryState = {
    directoriesList: [],
    activeDirectory: null,
};

export const directoriesSlice = createSlice({
    name: "directory",
    initialState,
    reducers: {
        addDirectory: (state, action: PayloadAction<IFile>) => {
            state.activeDirectory = action.payload;

            if (
                !state.directoriesList
                    ?.map((value) => value._id)
                    .includes(action.payload._id)
            ) {
                state.directoriesList = state.directoriesList
                    ? [...state.directoriesList, action.payload]
                    : [action.payload];
            }
        },
        removeDirectory: (state, action: PayloadAction<IFile>) => {
            const tmp = state?.directoriesList?.filter(
                (value) => value._id !== action.payload._id
            );

            if (state.activeDirectory !== null) {
                state.activeDirectory = tmp?.includes(state.activeDirectory)
                    ? state.activeDirectory
                    : tmp?.length
                    ? tmp?.[0]
                    : null;
            }
            state.directoriesList = tmp;
        },
    },
});

export const { addDirectory, removeDirectory } = directoriesSlice.actions;
export default directoriesSlice.reducer;
