import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import AddProduct from "../views/AddProduct.vue";
import EditProduct from "../views/EditProduct.vue";
import store from "../store";
// import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "Products",
    component: Products,
    beforeEnter: (to, from, next) => {
      store.dispatch("isLoggedIn");
      if (store.state.login) next();
      else next({ name: "Login" });
    },
  },
  {
    path: "/products/add",
    name: "AddProduct",
    component: AddProduct,
    beforeEnter: (to, from, next) => {
      store.dispatch("isLoggedIn");
      if (store.state.login) next();
      else next({ name: "Login" });
    },
  },
  {
    path: "/products/:id/edit",
    name: "EditProduct",
    component: EditProduct,
    beforeEnter: (to, from, next) => {
      store.dispatch("isLoggedIn");
      if (store.state.login) next();
      else next({ name: "Login" });
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
