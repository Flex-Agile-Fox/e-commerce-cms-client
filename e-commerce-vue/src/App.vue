<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: whitesmoke !important;
}
</style>
