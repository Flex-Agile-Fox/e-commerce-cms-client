<template>
  <div class="card" style="width: 18rem">
    <img :src="product.image_url" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <span class="badge bg-secondary">{{ product.category }}</span>
      <p class="card-text">
        {{ product.description }}
      </p>
      <p class="card-text">Rp. {{ product.price }}</p>
      <p class="card-text">Stock: {{ product.stock }}</p>
    </div>
    <div class="card-body">
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>
<style></style>
