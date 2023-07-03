import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice(
  {
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
      setIsLogined: (state, action) => {
        state.isLoggedIn = action.payload;
      },

    },

  }

)
export const { setIsLogined } = authslice.actions;
export default authslice.reducer;