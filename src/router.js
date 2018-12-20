import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Archive from "./views/Archives";
import About from "./views/About";
import Contact from "./views/Contact";
import Now from "./views/Now";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/archives",
      name: "achives",
      component: Archive
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/now",
      name: "now",
      component: Now
    }
  ]
});
