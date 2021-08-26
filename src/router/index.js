import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import Portfolio from "../views/portfolio/Portfolio.vue";
import Contact from "../views/contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },  
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
