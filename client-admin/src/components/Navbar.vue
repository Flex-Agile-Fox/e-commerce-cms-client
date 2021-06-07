<template>
  <b-nav id="nav" tabs align="right">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Logout</router-link>
  </b-nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#nav {
  width: auto;
  height: 8vh;
}
</style>
