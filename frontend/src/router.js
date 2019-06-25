import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Vans from "./views/Vans.vue";
import Cars from "./views/Cars.vue";
import CarDetails from "./views/Cars/CarDetails.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  },
  {
    path: "/cars",
    name: "cars",
    component: Cars
  },
  {
    path: "/vans",
    name: "vans",
    component: Vans
  },
  {
    path: "/cars/:id",
    name: "CarDetails",
    component: CarDetails
  }
];

const router = new Router({
  routes,
  mode: "history"
});

export default router;
