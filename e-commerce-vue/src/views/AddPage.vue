<template>
  <div class="container mt-5">
    <div class="card mb-3 mx-auto">
      <form class="mb-3" @submit.prevent="addProduct">
        <div class="mb-3 px-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="mb-3 px-3">
          <label for="image_url" class="form-label">Image Url</label>
          <input type="text" class="form-control" v-model="imageUrl">
        </div>
        <div class="mb-3 px-3">
          <label for="category" class="form-label">Category</label>
          <div>
            <select class="form-select" aria-label="Default select example" style="width:100%;padding:8px 2px" v-model="category">
              <option value="" selected>Select Category</option>
              <option value="Shirt">Shirt</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Shoes">Shoes</option>
              <option value="Hat">Hat</option>
              <option value="Pants">Pants</option>
            </select>
          </div>
        </div>
        <div class="mb-3 px-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" v-model="price">
        </div>
        <div class="mb-3 px-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" class="form-control" v-model="stock">
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary mt-2" style="width: 100px">Submit</button>
          <button type="button" class="btn btn-warning mt-2" style="width: 100px">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddPage',
  computed: {
    name: {
      get () {
        return this.$store.state.selectedProduct.name
      },
      set (value) {
        this.$store.commit('setName', value)
      }
    },
    imageUrl: {
      get () {
        return this.$store.state.selectedProduct.image_url
      },
      set (value) {
        this.$store.commit('setImageUrl', value)
      }
    },
    category: {
      get () {
        return this.$store.state.selectedProduct.category
      },
      set (value) {
        this.$store.commit('setCategory', value)
      }
    },
    price: {
      get () {
        return this.$store.state.selectedProduct.price
      },
      set (value) {
        this.$store.commit('setPrice', value)
      }
    },
    stock: {
      get () {
        return this.$store.state.selectedProduct.stock
      },
      set (value) {
        this.$store.commit('setStock', value)
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct')
    }
  }
}
</script>
