import { NextResponse } from "next/server";
import getUsers from "./getUsers";

export default async function addUserData(userData) {
  const users = await getUsers();
  let userIndex = users.findIndex((user) => user.email === userData.email);
  if (userIndex === -1) {
    userIndex = users.length;
  }
  const res = await fetch(
    `https://learnu-daf0b-default-rtdb.firebaseio.com/users/${userIndex}.json`,
    {
      method: "PUT",
      body: JSON.stringify({
        email: userData.email,
        savedCourses: userData.savedCourses,
        myCourses: userData.myCourses,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error({ message: "Could not add user data" }, { status: 500 });
  }
  return NextResponse.json(
    { message: "User added successfully" },
    { status: 200 }
  );
}
