import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import Toastify from "toastify-js";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    login: false,
    products: [],
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.login = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    isLoggedIn(context) {
      if (localStorage.getItem("access_token")) {
        context.commit("SET_LOGIN", true);
        return true;
      } else {
        context.commit("SET_LOGIN", false);
        return false;
      }
    },
    logOut(context) {
      localStorage.removeItem("access_token");
      router.push("/login");
      context.commit("SET_LOGIN", false);
    },
    getProducts(context) {
      axios({
        method: "GET",
        url: "/products",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          context.commit("SET_PRODUCTS", data.data.products);
        })
        .catch(({ response }) => {
          response.data.errors.forEach((err) => {
            Toastify({
              text: `${err}`,
              duration: 1000,
              className: "warning",
            }).showToast();
          });
        });
    },
    getProductById(context, payload) {
      return axios({
        method: "GET",
        url: "/products/" + payload,
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    addProduct(context, payload) {
      axios({
        method: "POST",
        url: "/products",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        data: payload,
      })
        .then(() => {
          router.push("/products");
        })
        .catch(({ response }) => {
          response.data.errors.forEach((err) => {
            Toastify({
              text: `${err}`,
              duration: 1000,
              className: "warning",
            }).showToast();
          });
        });
    },
    editProduct(context, payload) {
      const { id, product } = payload;
      axios({
        method: "PUT",
        url: "/products/" + id,
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        data: product,
      })
        .then(() => {
          router.push("/products");
        })
        .catch(({ response }) => {
          response.data.errors.forEach((err) => {
            Toastify({
              text: `${err}`,
              duration: 1000,
              className: "warning",
            }).showToast();
          });
        });
    },
    deleteProduct(context, payload) {
      axios({
        method: "DELETE",
        url: "/products/" + payload,
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(() => {
          context.dispatch("getProducts");
        })
        .catch(({ response }) => {
          response.data.errors.forEach((err) => {
            Toastify({
              text: `${err}`,
              duration: 1000,
              className: "warning",
            }).showToast();
          });
        });
    },
  },
  modules: {},
});
