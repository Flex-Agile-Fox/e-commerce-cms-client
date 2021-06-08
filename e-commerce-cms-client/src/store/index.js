import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Toastify from 'toastify-js'
import router from '../router'

Vue.use(Vuex)

// PRODUCTION
const baseURL = 'https://e-commerce-cms-server-hacktiv8.herokuapp.com'
// DEPLOYMENT
// const baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: [],
    productDetail: {}
  },
  mutations: {
    products (state, payload) {
      state.products = payload
    },
    productDetail (state, payload) {
      state.productDetail = payload
    }
  },
  actions: {
    // LOGIN
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: baseURL + '/login',
        data: {
          email,
          password
        }
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        router.push({ path: '/home' })
        Toastify({
          text: 'Selamat Datang.. ',
          duration: 3000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
        }).showToast()
      }).catch((err) => {
        const errMessage = err.response.data.errMsg
        errMessage.forEach(e => {
          Toastify({
            text: e,
            gravity: 'bottom', // `top` or `bottom`
            duration: 3000
          }).showToast()
        })
      })
    },

    // GET PRODUCT
    getDataProduct (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data.data)
        // this.products = data.data
        context.commit('products', data.data)
      }).catch((err) => {
        console.log(err)
      })
    },

    // POST PRODUCT
    adddDataProduct (context, payload) {
      const { name, imageURL, price, stock } = payload
      axios({
        method: 'POST',
        url: baseURL + '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image_url: imageURL,
          price,
          stock
        }
      }).then(({ data }) => {
        // this.$router.push('/')
        router.push({ path: '/home' })
        Toastify({
          text: 'Data berhasil di tambah',
          duration: 3000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
        }).showToast()
      }).catch((err) => {
        const errMessage = err.response.data.errMsg
        errMessage.forEach(e => {
          Toastify({
            text: e,
            gravity: 'bottom', // `top` or `bottom`
            duration: 3000
          }).showToast()
        })
      })
    },

    // GET DETAIL PRODUCT
    getDataDetail (context, payload) {
      return axios({
        method: 'GET',
        url: baseURL + '/product/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },

    editDataProduct (context, payload) {
      const { id, product } = payload
      axios({
        method: 'PUT',
        url: baseURL + '/product/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: product
      }).then(({ data }) => {
        console.log(data)
        router.push({ path: '/home' })
        Toastify({
          text: 'Berhasil edit data..',
          duration: 3000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
        }).showToast()
      }).catch((err) => {
        console.log(err)
      })
    },

    // DELETE PRODUCT
    deleteDataProduct (context, payload) {
      return axios({
        method: 'DELETE',
        url: baseURL + '/product/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
