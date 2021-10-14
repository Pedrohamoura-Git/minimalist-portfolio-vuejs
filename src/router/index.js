import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Home from "../views/home/Home.vue";
import Portfolio from "../views/portfolio/Portfolio.vue";
import Contact from "../views/contact/Contact.vue";
// Projects 
import PokeShop from "../views/projects/poke-shop/PokeShop.vue";
import GithubProfiles from "../views/projects/github-profiles/GithubProfiles";
import TodoApp from "../views/projects/todo-app/TodoApp.vue";
import MyPortfolio from "../views/projects/my-portfolio/MyPortfolio.vue";
import FaqCard from "../views/projects/faq-card/FaqCard.vue";
import Fylo from "../views/projects/fylo/Fylo.vue";
import Testimonials from "../views/projects/testimonials/Testimonials.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/poke-shop",
    name: "Poke Shop",
    component: PokeShop,
  },
  {
    path: "/github-profiles",
    name: "Github Profiles",
    component: GithubProfiles,
  },
  {
    path: "/my-portfolio",
    name: "My Portfolio",
    component: MyPortfolio,
  },
  {
    path: "/todo-app",
    name: "Todo App",
    component: TodoApp,
  },
  {
    path: "/faq-card",
    name: "Faq Card",
    component: FaqCard,
  },
  {
    path: "/fylo",
    name: "Fylo",
    component: Fylo,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;