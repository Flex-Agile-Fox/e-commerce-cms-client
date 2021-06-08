<template>
  <div class="col-4">
    <div class="card m-4 text-center" style="width: 25rem">
      <img
        :src="product.image_url"
        class="card-img-top"
        :alt="product.name"
        style="height: 398px"
      />
      <div class="card-body capitalize">
        <h5 class="card-title">
          {{ product.name }}
          <span class="badge bg-secondary capitalize">{{
            product.category
          }}</span>
        </h5>
        <p class="card-text capitalize">
          {{ product.description }}
        </p>
        <p class="card-text">
          Rp. {{ new Intl.NumberFormat("id-ID").format(product.price) }}
        </p>
        <p class="card-text">
          Stock: {{ new Intl.NumberFormat("id-ID").format(product.stock) }} pcs
        </p>
      </div>
      <div class="card-body d-flex justify-content-around">
        <button @click="editProduct" class="btn btn-primary col-5">Edit</button>
        <button @click="deleteProduct" class="btn btn-danger col-5">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
  methods: {
    editProduct() {
      this.$router.push(`/products/${this.product.id}/edit`);
    },
    deleteProduct() {
      this.$store.dispatch("deleteProduct", this.product.id);
    },
  },
};
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
.card-title {
  font-size: 1.75rem;
}
</style>
