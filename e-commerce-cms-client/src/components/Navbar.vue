<template>
    <nav class="navbar navbar-expand-lg" style="background-color: rgb(0, 148, 216);">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand" style="color:yellow; font-size:28px; font-family: 'Kaushan Script', cursive;">e - Commerce Admin</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link active" aria-current="page" style="color:white">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/addProduct" class="nav-link active" aria-current="page" style="color:white">Tambah Produk</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <a v-on:click="logout" class="btn btn-danger btn-logout" style="color:white">Logout</a>
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
        backgroundColor: '#3CB371'
      }).showToast()
    }
  }
}
</script>

<style>

</style>
