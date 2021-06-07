<template>
  <div>
    <Navbar></Navbar>

    <!-- container -->
    <div class="container mt-5">
      <div class="row">
        <!-- form add -->
        <FormAddProduct></FormAddProduct>
        <!-- form add end-->
      </div>
    </div>
    <!-- container end -->

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import FormAddProduct from '../components/FormAddProduct.vue'

export default {
  name: 'AddProduct',
  components: {
    Navbar,
    FormAddProduct
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

</style>
