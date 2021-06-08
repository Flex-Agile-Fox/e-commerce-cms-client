<template>
  <div>
    <Navbar></Navbar>
    <!-- container -->
    <div class="container mt-5">
      <h2>List Produk:</h2>
      <div class="row mt-4">
        <ProductList
          :products='products'
        ></ProductList>
      </div>
    </div>
    <!-- container end -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getDataProduct')
  }
}
</script>

<style scoped>

</style>
