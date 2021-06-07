import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selectedProduct: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'users/login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'MainPage' })
          // Toastify({
          //   text: "Successfully Login",
          //   duration: 2000,
          //   backgroundColor: "#07bc0c",
          // }).showToast();
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to login", errors.join(', '), "error");
          // }
        })
    },
    listProduct ({ commit }) {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setProducts', data.data)
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data)
            // const errors = err.response.data.errorMessages;
            // swal("Failed to show list product", errors.join(', '), "error");
          }
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(() => {
          router.push({ name: 'MainPage' })
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to add product", errors.join(', '), "error");
          // }
        })
    },
    detailProduct ({ commit }, id) {
      return axios({
        method: 'GET',
        url: `products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload.product
      })
        .then(() => {
          router.push({ name: 'MainPage' })
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to get detail product", errors.join(', '), "error");
          // }
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: `products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('listProduct')
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to delete product", errors.join(', '), "error");
          // }
        })
    }
  },
  modules: {
  }
})
