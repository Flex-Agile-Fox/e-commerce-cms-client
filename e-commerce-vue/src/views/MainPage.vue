<template>
  <div>
    <ProductsTable :products="products"/>
  </div>
</template>

<script>
import ProductsTable from '../components/ProductsTable'

export default {
  name: 'MainPage',
  components: {
    ProductsTable
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    listProduct () {
      this.$store.dispatch('listProduct')
    }
  },
  created () {
    this.listProduct()
  }
}
</script>
