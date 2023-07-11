import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  savedCourses: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
    },
    setSavedCourses: (state, action) => {
      state.savedCourses.push(action.payload);
    },
  },
});

export const { setUser, setSavedCourses } = userSlice.actions;
export default userSlice.reducer;
