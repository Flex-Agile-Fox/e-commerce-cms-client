<template>
	<div id="app">
		<Navbar v-if="!['Login'].includes($route.name)"></Navbar>
		<router-view />
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
	components: {
		Navbar,
	},
};
</script>

<style>
#app {
	font-family: 'Ubuntu', sans-serif;
}
</style>
