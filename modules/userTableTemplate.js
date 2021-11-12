
export default function userTableTemplate(users, userData) {
  let html = ''

  for (const user of users) {
    html += `
      <tr>
        <td>${user.id}</td>
        <td class="user-name">${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
      </tr>
    `
  }

  userData.innerHTML = html

}


