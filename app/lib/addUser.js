import { NextResponse } from "next/server";
export default async function addUser(user) {
  const { email, savedCourses, myLearning } = user;
  const res = await fetch(
    "https://learnu-daf0b-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      body: JSON.stringify({ email, savedCourses, myLearning }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) return undefined;

  return NextResponse.json(
    { message: "User added successfully" },
    { status: 200 }
  );
}
