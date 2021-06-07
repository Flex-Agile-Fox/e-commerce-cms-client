<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand">e - Commerce Admin</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link active" aria-current="page">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/addProduct" class="nav-link active" aria-current="page">Tambah Produk</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <a v-on:click="logout" class="btn btn-danger">Logout</a>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
import Toastify from 'toastify-js'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ path: '/' })
      Toastify({
        text: 'Anda telah logout',
        duration: 3000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
      }).showToast()
    }
  }
}
</script>

<style>

</style>
