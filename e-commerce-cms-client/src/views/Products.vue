<template>
  <div class="container">
    <button class="btn btn-success mt-4" @click="addProduct">
      Add Product
    </button>
    <div class="product row">
      <Product
        v-for="product in this.$store.state.products"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Products",
  components: {
    Product,
  },
  methods: {
    addProduct() {
      this.$router.push({ name: "AddProduct" });
    },
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>
