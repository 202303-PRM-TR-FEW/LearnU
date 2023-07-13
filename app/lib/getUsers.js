export default async function getUsers() {
  const res = await fetch(
    "https://learnu-daf0b-default-rtdb.firebaseio.com/users.json"
  );
  const data = await res.json();
  console.log("data", data);
  return data;
}
