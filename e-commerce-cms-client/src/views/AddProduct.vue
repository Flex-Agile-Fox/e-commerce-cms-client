<template>
  <div>
    <Navbar></Navbar>
    <!-- container -->
    <div class="container mt-5">
      <h2>Form Tambah Produk:</h2>
      <div class="row mt-4">
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
  }
}
</script>

<style>

</style>
