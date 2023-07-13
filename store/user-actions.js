import getUser from "@/app/lib/getUser";
import { replaceUser } from "./userSlice";
import addUser from "@/app/lib/addUser";

export const fetchUser = (email) => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const data = await getUser();
      return data;
    };
    try {
      const users = await fetchRequest();
      console.log("users", users);
      dispatch(
        replaceUser({
          email: users.email || "",
          savedCourses: users.savedCourses || [],
          myLearning: users.myLearning || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export const sendUser = (user) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await addUser(user);
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
    };
    try {
      sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
