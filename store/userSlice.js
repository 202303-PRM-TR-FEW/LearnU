import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  savedCourses: [],
  myLearning: [],
  changed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (state.email === "") {
        state.email = action.payload;
      }
    },
    setSavedCourses: (state, action) => {
      const existedCourse = state.savedCourses.find(
        (course) => course === action.payload
      );
      if (!existedCourse) {
        state.savedCourses.push(action.payload);
        state.changed = true;
      }
    },
    setMyLearning: (state, action) => {
      const existedMyLearning = state.myLearning.find(
        (course) => course === action.payload
      );
      if (!existedMyLearning) {
        state.myLearning.push(action.payload);
        state.changed = true;
      }
    },
    removeSavedCourse: (state, action) => {
      state.savedCourses = state.savedCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { setUser, setSavedCourses, setMyLearning } = userSlice.actions;
export default userSlice.reducer;
