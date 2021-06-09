<template>
	<b-navbar type="dark" variant="dark">
		<b-navbar-brand to="/" class="nav-title">Dashboard</b-navbar-brand>
		<b-navbar-nav class="ml-auto mr-12">
			<b-nav-item @click.prevent="logout" class="logout">Logout</b-nav-item>
		</b-navbar-nav>
	</b-navbar>
</template>

<script>
export default {
	name: 'Navbar',
	methods: {
		logout() {
			this.$store.dispatch('logout');
		},
	},
};
</script>

<style>
.nav-title {
	margin-left: 20px;
	text-transform: uppercase;
	font-weight: 700;
}
.logout {
	font-weight: 700;
}
.ml-auto {
	margin-left: auto;
}
.mr-12 {
	margin-right: 12px;
}
</style>
