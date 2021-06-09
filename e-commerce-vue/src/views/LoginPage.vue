<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-5 mx-auto" style="border:solid 1px darkcyan">
        <h4 class="text-center my-4">Login</h4>
        <form class="px-3" @submit.prevent="login">
          <div class="form-group row mb-4">
            <label class="col-3 col-form-label">Email</label>
            <div class="col-9">
              <input type="email" class="form-control" v-model="email" placeholder="Enter email">
            </div>
          </div>
          <div class="form-group row mb-5">
            <label class="col-3 col-form-label">Password</label>
            <div class="col-9">
              <input type="password" class="form-control" v-model="password" placeholder="Password">
            </div>
          </div>
          <button type="submit" class="btn col-12 btn-primary mb-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
