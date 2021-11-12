import getUsers from "./modules/getUsers.js";
import userTableTemplate from "./modules/userTableTemplate.js";
import getPosts from "./modules/getPosts.js";
import postsTableTemplate from "./modules/postTableTemplate.js";
import returnToUsers from "./modules/returnToUsers.js";
import createBackButton from "./modules/createBackButton.js";

const domElements = {
  userTable: document.querySelector("#user-table"),
  userData: document.querySelector("#user-data"),
  postsTable: document.querySelector("#posts-table"),
  postsData: document.querySelector("#posts-data"),
  returnUsers: document.querySelector("#return-users"),
};

async function main() {
  const users = await getUsers();
  userTableTemplate(users, domElements.userData);

  // add userData table event listener
  domElements.userData.addEventListener("click", async (e) => {
    if (e.target.classList.contains("user-name")) {
      const posts = await getPosts(
        e.target.parentElement.children[0].textContent
      );
      postsTableTemplate(posts, {
        postsTable: domElements.postsTable,
        postsData: domElements.postsData,
        userTable: domElements.userTable,
      });
      createBackButton(domElements.returnUsers);

      // add returnUsers button event listener
      domElements.returnUsers.addEventListener("click", function () {
        returnToUsers({
          postsTable: domElements.postsTable,
          userTable: domElements.userTable,
          returnUsers: domElements.returnUsers,
        });
      });
    }
  });
}

main();
