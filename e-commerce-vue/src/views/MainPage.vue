<template>
  <div>
    <div>
      <select class="form-select" aria-label="Default select example" style="width:20%;padding:8px 2px" @change="sortBy(sortType)" v-model="sortType">
        <option v-for="(option, index) in options" :value="option.value" :key="index">{{option.text}}</option>
      </select>
    </div>

    <div class="text-center my-3">
      <button type="button" class="btn btn-primary mt-2 mb-2 text-center" id="btn-add" @click.prevent="toAddPage"><i class="fas fa-plus-circle"></i>  Add Product</button>
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
    }
  },
  methods: {
    listProduct () {
      this.$store.dispatch('listProduct')
    },
    toAddPage () {
      this.$router.push({ name: 'AddPage' })
      this.$store.commit('setPage', 'add')
    },
    sortBy (sort) {
      this.$store.commit('setSort', sort)
    }
  },
  created () {
    this.listProduct()
  }
}
</script>
