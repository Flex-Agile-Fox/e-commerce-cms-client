<template>
    <div>
        <Navbar></Navbar>
        <!-- container -->
        <div class="container mt-5">
          <h2>Form Edit Produk:</h2>
          <div class="row mt-4">
            <!-- form edit -->
            <FormEditProduct></FormEditProduct>
            <!-- form edit end -->
          </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import FormEditProduct from '../components/FormEditProduct.vue'

export default {
  name: 'EditProduct',
  data () {
    return {
      productDetail: {}
    }
  },
  components: {
    Navbar,
    FormEditProduct
  }
}
</script>

<style>

</style>
