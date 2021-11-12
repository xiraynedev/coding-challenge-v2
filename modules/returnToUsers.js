export default function returnToUsers({postsTable, userTable, returnUsers}) {
  postsTable.setAttribute('hidden', 'hidden')
  userTable.removeAttribute('hidden')
  returnUsers.setAttribute('hidden', 'hidden')
}
