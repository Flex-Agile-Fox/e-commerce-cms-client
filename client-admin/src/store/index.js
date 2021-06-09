import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';
import Toastify from 'toastify-js';

Vue.use(Vuex);

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'https://cms-admin-dashboard.herokuapp.com';

export default new Vuex.Store({
	state: {
		products: [],
	},
	mutations: {
		setProducts(state, payload) {
			state.products = payload;
		},
	},
	actions: {
		login(context, payload) {
			const { email, password } = payload;
			axios({
				method: 'POST',
				url: 'users/login',
				headers: { 'Content-Type': 'application/json' },
				data: {
					email,
					password,
				},
			})
				.then(({ data }) => {
					localStorage.setItem('access_token', data.access_token);
					router.push({ name: 'Home' });
				})
				.catch((err) => {
					Toastify({
						text: err.response.data.message,
						backgroundColor: '#FF6263',
					}).showToast();
				});
		},
		fetchProducts({ commit }) {
			axios({
				method: 'GET',
				url: 'products',
				headers: {
					'Content-Type': 'application/json',
					access_token: localStorage.getItem('access_token'),
				},
			})
				.then(({ data }) => {
					commit('setProducts', data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		addProduct(context, payload) {
			axios({
				method: 'POST',
				url: 'products',
				headers: {
					'Content-Type': 'application/json',
					access_token: localStorage.getItem('access_token'),
				},
				data: payload,
			})
				.then(() => {
					router.push({ name: 'Home' });
					Toastify({
						text: 'Product has been added',
						backgroundColor: '#1FAA59',
					}).showToast();
				})
				.catch((err) => {
					const message = err.response.data.message;
					message.forEach((errMsg) => {
						Toastify({
							text: errMsg,
							backgroundColor: '#FF6263',
						}).showToast();
					});
				});
		},
		getProduct(context, payload) {
			return axios({
				method: 'GET',
				url: 'products/' + payload,
				headers: {
					'Content-Type': 'application/json',
					access_token: localStorage.getItem('access_token'),
				},
			});
		},
		editProduct(context, payload) {
			const { id, product } = payload;
			axios({
				method: 'PUT',
				url: 'products/' + id,
				headers: {
					'Content-Type': 'application/json',
					access_token: localStorage.getItem('access_token'),
				},
				data: product,
			})
				.then(() => {
					router.push({ name: 'Home' });
					Toastify({
						text: 'Product has been edited',
						backgroundColor: '#1FAA59',
					}).showToast();
				})
				.catch((err) => {
					Toastify({
						text: err.response.data.message,
						backgroundColor: '#FF6263',
					}).showToast();
				});
		},
		delete(context, payload) {
			axios({
				method: 'DELETE',
				url: 'products/' + payload,
				headers: {
					'Content-Type': 'application/json',
					access_token: localStorage.getItem('access_token'),
				},
			})
				.then(() => {
					context.dispatch('fetchProducts');
					Toastify({
						text: 'Product has been deleted',
						backgroundColor: '#1FAA59',
					}).showToast();
				})
				.catch((err) => {
					Toastify({
						text: err.response.data.message,
						backgroundColor: '#FF6263',
					}).showToast();
				});
		},
		logout() {
			localStorage.clear();
			router.push({ name: 'Login' });
		},
	},
	modules: {},
});
