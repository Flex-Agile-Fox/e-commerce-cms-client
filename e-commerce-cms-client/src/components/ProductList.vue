<template>
  <!-- items -->
  <div class="col-12">
    <div class="row">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></Product>
    </div>
  </div>
  <!-- items end -->
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    Product
  }
}
</script>

<style>

</style>
