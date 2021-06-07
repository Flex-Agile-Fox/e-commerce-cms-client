import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.login = payload;
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
      context.commit("SET_LOGIN", false);
    },
  },
  modules: {},
});
