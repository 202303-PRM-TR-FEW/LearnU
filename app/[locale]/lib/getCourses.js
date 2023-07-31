export default async function getCourses() {
  const res = await fetch(
    "https://learnu-daf0b-default-rtdb.firebaseio.com/courses.json"
  );
  const data = await res.json();
  return data;
}
