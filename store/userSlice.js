import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  savedCourses: [],
  myCourses: [],
  changed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    replaceUser: (state, action) => {
      state.savedCourses = action.payload.savedCourses;
      state.myCourses = action.payload.myCourses;
    },
    setUser: (state, action) => {
      if (state.email === "") {
        state.email = action.payload;
        state.changed = true;
      }
    },
    setSavedCourses: (state, action) => {
      const existedCourse = state.savedCourses.find(
        (course) => course.id === action.payload.id
      );
      if (!existedCourse) {
        state.savedCourses.push(action.payload);
        state.changed = true;
      }
    },
    setMyLearning: (state, action) => {
      const existedMyLearning = state.myCourses.find(
        (course) => course.id === action.payload.id
      );
      if (!existedMyLearning) {
        state.myCourses.push(action.payload);
        state.changed = true;
      }
    },
    removeSavedCourse: (state, action) => {
      state.savedCourses = state.savedCourses.filter(
        (course) => course.id !== action.payload.id
      );
      state.changed = true;
    },
    removeMyLearning: (state, action) => {
      console.log(action.payload);
      state.myCourses = state.myCourses.filter(
        (course) => course.id !== action.payload
      );
      state.changed = true;
    },
  },
});

export const {
  setUser,
  setSavedCourses,
  setMyLearning,
  replaceUser,
  removeSavedCourse,
  removeMyLearning,
} = userSlice.actions;

export default userSlice.reducer;
