<template>
  <div>
    <div class="text-center my-3">
      <button type="button" class="btn btn-primary mt-2 mb-2 text-center rounded-pill" id="btn-add" @click.prevent="toAddPage"><i class="fas fa-plus-circle"></i>  New Product</button>
    </div>
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
    },
    toAddPage () {
      this.$router.push({ name: 'AddPage' })
      this.$store.commit('setPage', 'add')
    }
  },
  created () {
    this.listProduct()
  }
}
</script>
