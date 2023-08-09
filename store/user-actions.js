import getUser from "@/app/lib/getUsers";
import { replaceUser } from "./userSlice";
import addUserData from "@/app/lib/addUserData";

export const fetchUser = (email) => {
  return async (dispatch) => {
    try {
      const users = await getUser();
      console.log("users", users);
      const user = users.find((user) => user.email === email);
      console.log("user", user);
      dispatch(
        replaceUser({
          savedCourses: user.savedCourses || [],
          myCourses: user.myCourses || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};  
export const sendUser = (userData) => {
  return async (dispatch) => {
    try {
      addUserData(userData);
    } catch (error) {
      console.log(error);
    }
  };
};
