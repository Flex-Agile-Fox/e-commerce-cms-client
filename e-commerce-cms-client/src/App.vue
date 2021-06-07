<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isPage: 'Login'
    }
  },
  components: {
    // Navbar,
    // Login
  },
  methods: {
    // isLogin () {
    //   if (localStorage.getItem('access_token')) {
    //     this.isPage = 'Home'
    //   } else {
    //     this.isPage = 'Login'
    //   }
    // },
    // changePage (page) {
    //   this.isPage = page
    // },
    // logout () {
    //   localStorage.removeItem('access_token')
    //   this.isLogin()
    // }
  }
}
</script>

<style>
.card{
  margin: 5px;
}

.items-line{
  border-bottom: 1px solid rgb(236, 236, 236);
}
</style>
