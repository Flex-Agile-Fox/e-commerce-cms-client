<template>
  <!-- items -->
  <div class="col-12">
    <div class="row">
      <table class="table table-striped">
        <thead style="background-color: rgb(253, 210, 92);">
          <tr>
            <th>No.</th>
            <th>Gambar</th>
            <th>Name</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <Product
          v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          :index="index"
        ></Product>
        </tbody>
      </table>
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
