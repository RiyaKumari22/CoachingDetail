import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice(
    {
        name: "Global Slice",
        initialState: { drawerOpen: true },
        reducers: {
            setIsDrawerOpen: (state, action) => {
                state.drawerOpen = !state.drawerOpen;
            },

        },

    }

)
export const { setIsDrawerOpen } = globalSlice.actions;
export default globalSlice.reducer;