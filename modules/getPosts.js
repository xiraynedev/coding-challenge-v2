
export default async function getPosts(id) {
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  const posts = await postResponse.json()
  return posts
}
