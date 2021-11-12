export default async function getUsers() {
  const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await userResponse.json()
  return users
}
