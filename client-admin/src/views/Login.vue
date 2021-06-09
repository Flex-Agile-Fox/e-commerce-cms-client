<template>
	<b-container class="container-login">
		<b-form @submit.prevent="login" class="login-form" novalidate>
			<span class="login-form-title pb-51">Login</span>
			<b-form-group id="input-group-1" label-for="input-1">
				<b-form-input
					id="input-1"
					v-model="email"
					type="email"
					placeholder="Email"
					required
					class="mb-16"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label-for="input-2">
				<b-form-input
					id="input-2"
					v-model="password"
					type="password"
					placeholder="Password"
					required
					class="mb-16"
				></b-form-input>
			</b-form-group>

			<b-button type="submit" variant="primary" class="block">Login</b-button>
		</b-form>
	</b-container>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		login() {
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password,
			});
		},
	},
	beforeRouteEnter(to, from, next) {
		if (localStorage.getItem('access_token')) {
			next('/');
		} else {
			next();
		}
	},
};
</script>

<style>
.login {
	width: 100%;
	margin: 0 auto;
}
.container-login {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
.login-form {
	width: 360px;
}
.login-form-title {
	font-size: 30px;
	font-weight: 800;
	color: #403866;
	line-height: 1.2;
	text-transform: uppercase;
	text-align: center;
	width: 100%;
	display: block;
}
.pb-51 {
	padding-bottom: 51px;
}
.mb-16 {
	margin-bottom: 16px;
}
.block {
	width: 360px;
}
#input-1,
#input-2 {
	font-weight: 700;
	font-size: 14px;
	color: #403866;
	padding: 10px 40px;
	text-align: center;
}
</style>
