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
    },
    setSelectedProduct (state, payload) {
      state.selectedProduct = payload
    },
    setName (state, payload) {
      state.selectedProduct.name = payload
    },
    setImageUrl (state, payload) {
      state.selectedProduct.image_url = payload
    },
    setCategory (state, payload) {
      state.selectedProduct.category = payload
    },
    setPrice (state, payload) {
      state.selectedProduct.price = payload
    },
    setStock (state, payload) {
      state.selectedProduct.stock = payload
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
    detailProduct ({ commit }, id) {
      axios({
        method: 'GET',
        url: `products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setSelectedProduct', data.data)
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to get detail product", errors.join(', '), "error");
          // }
        })
    },
    editProduct ({ state }, id) {
      const { name, image_url: imageUrl, category, price, stock } = state.selectedProduct
      axios({
        method: 'PUT',
        url: `products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image_url: imageUrl,
          category,
          price,
          stock
        }
      })
        .then(({ data }) => {
          router.push({ name: 'MainPage' })
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to get detail product", errors.join(', '), "error");
          // }
        })
    }
  },
  modules: {
  }
})
