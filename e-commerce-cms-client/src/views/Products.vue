<template>
  <div class="product">
    <Product v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Products",
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          id: 2,
          name: "test to update",
          image_url:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          price: 1000,
          stock: 5,
          category: "Hobby",
          description: "Limited Edition",
          createdAt: "2021-06-04T11:47:05.864Z",
          updatedAt: "2021-06-04T11:47:05.864Z",
        },
        {
          id: 3,
          name: "test to update",
          image_url:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          price: 1000,
          stock: 5,
          category: "Hobby",
          description: "Limited Edition",
          createdAt: "2021-06-04T11:47:06.755Z",
          updatedAt: "2021-06-04T11:47:06.755Z",
        },
        {
          id: 4,
          name: "test to update",
          image_url:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          price: 1000,
          stock: 5,
          category: "Hobby",
          description: "Limited Edition",
          createdAt: "2021-06-04T11:47:07.685Z",
          updatedAt: "2021-06-04T11:47:07.685Z",
        },
      ],
    };
  },
};
</script>
