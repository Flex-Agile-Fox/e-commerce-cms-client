<template>
  <div>
    <div class="container mt-3 mb-4">
      <div class="row mt-5 align-items-center">
        <div class="col d-flex flex-row align-items-center">
          <label for="sel-options">Sort By :</label>
          <select id="sel-options" class="form-select mx-2" aria-label="Default select example" style="width:100px;padding:4px" v-model="sortType">
            <option v-for="(option, index) in options" :value="option.value" :key="index">{{option.text}}</option>
          </select>
        </div>
        <div class="col d-flex justify-content-center">
          <h4>Product Data</h4>
        </div>
        <div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-primary text-center" id="btn-add" @click.prevent="toAddPage"><i class="fas fa-plus-circle"></i>  Add Product</button>
        </div>
      </div>
    </div>
    <ProductsTable :products="productSorted"/>
  </div>
</template>

<script>
import ProductsTable from '../components/ProductsTable'

export default {
  name: 'MainPage',
  components: {
    ProductsTable
  },
  data () {
    return {
      options: [
        { text: 'Name', value: 'name' },
        { text: 'Category', value: 'category' },
        { text: 'Stock', value: 'stock' },
        { text: 'Price', value: 'price' }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    productSorted () {
      return this.$store.getters.sortProduct
    },
    sortType: {
      get () {
        return this.$store.state.sort
      },
      set (value) {
        this.$store.commit('setSort', value)
      }
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
    this.$store.commit('setPage', 'main')
  }
}
</script>
