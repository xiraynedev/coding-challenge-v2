export default function postsTableTemplate(posts, domElements) {
  const {postsTable, userTable, postsData} = domElements

  postsTable.removeAttribute('hidden')
  userTable.setAttribute('hidden', 'hidden')

  let html = ''

  for (const post of posts) {
    html += `
      <tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>
    `
  }

  postsData.innerHTML = html

}
