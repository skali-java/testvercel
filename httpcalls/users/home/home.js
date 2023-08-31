import { userService } from "../service/user.service.js";
import { UserRow } from "./components/user-row.js";

// Pending...
// Rejected...
// Resolved...
/** Without classes */
// let users;
// usersService.fetchAll().then((data) => {
//   const users = data;
//   const $users = document.querySelector("#usersList");
//   for (const user of users) {
//     $users.innerHTML += UserRow(user);
//   }
// });

/**
 *  With classes
 */
class UserHome {
  constructor(userService) {
    this.userService = userService;
    this.$users = document.querySelector("#usersList");
    this.users = [];
  }

  async render() {
    this.users = await this.userService.fetchAll();
    for (const user of this.users) {
      this.$users.innerHTML += UserRow(user);
    }
  }
}

const userHome = new UserHome(userService);
userHome.render();
