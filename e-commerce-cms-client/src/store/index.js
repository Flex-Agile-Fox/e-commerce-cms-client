import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Toastify from 'toastify-js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    test (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
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
        console.log(err)
      })
    },

    getDataProduct (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data.data)
        // this.products = data.data
        context.commit('test', data.data)
      }).catch((err) => {
        console.log(err)
      })
    },

    adddDataProduct (context, payload) {
      const { name, imageURL, price, stock } = payload
      axios({
        method: 'POST',
        url: 'http://localhost:3000/product',
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
        console.log(err)
      })
    },

    deleteDataProduct (context, payload) {
      return axios({
        method: 'DELETE',
        url: 'http://localhost:3000/product/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
