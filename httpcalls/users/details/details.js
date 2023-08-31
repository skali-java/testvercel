import { getParam } from "../../utils/get-param.js";
import { userService } from "../service/user.service.js";
import { DetailsCard } from "./components/details-card.js";

const id = parseInt(getParam("id"));

/**
 *  Approche fonctionnelle
 */

// const $root = document.querySelector("#root");
// userService
//   .fetchById(id)
//   .then((data) => {
//     const user = data;
//     document.title = `Détails ${user.name}`;
//     $root.innerHTML = `
//     <h1>${user.name}</h1>
//     <h2><a href="mailto:${user.email}">${user.email}</a></h2>
//     <p><b>Company : </b>${user.company.name}</p>
//     <p>Phone : <a href="tel:${user.phone}">${user.phone}</a></p>
// `;
//   })
//   .catch((err) => {
//     // Avoir un 404
//     if (err.response.status === 404) {
//       $root.innerHTML = `<h1>404 Not Found</h1>
//     <p>User with id ${id} doesn't exist</p>
//     `;
//       return;
//     }
//     $root.innerHTML = `<h1>${err.response.status}</h1>`;
//   });

// Utilisation des classes
class UsersDetails {
  constructor(userService) {
    this.userService = userService;
    this.$root = document.querySelector("#root");
    this.user = null;
  }
  async render() {
    try {
      this.user = await this.userService.fetchById(id);
      document.title = `Détails ${name}`;
      this.$root.innerHTML = DetailsCard(this.user);
    } catch (err) {
      if (err.response.status === 404) {
        //     this.$root.innerHTML = `<h1>404 Not Found</h1>
        // <p>User with id ${id} doesn't exist</p>
        // `;
        location.href = "/404/404.html";
        return;
      }
      this.$root.innerHTML = `<h1>${err.response.status}</h1>`;
    }
  }
}

const userDetails = new UsersDetails(userService);
userDetails.render();
