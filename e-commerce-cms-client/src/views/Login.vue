<template>
  <div class="container">
    <form v-on:submit.prevent="login()">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="text" v-model="inputLogin.email" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" v-model="inputLogin.password" class="form-control">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      inputLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const email = this.inputLogin.email
      const password = this.inputLogin.password
      this.$store.dispatch('login', { email, password })
    }
  }
}
</script>

<style>

</style>
