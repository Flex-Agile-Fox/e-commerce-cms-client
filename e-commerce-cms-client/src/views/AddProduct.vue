<template>
  <div class="container container-form">
    <h1 class="header">Add Product</h1>
    <form>
      <!-- Name input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="name">Name</label>
        <input
          v-model="product.name"
          type="text"
          id="name"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <!-- Image Url -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="image_url">Image Url</label>
        <input
          v-model="product.image_url"
          type="text"
          id="image_url"
          class="form-control"
          placeholder="Image Url"
        />
      </div>
      <!-- Price input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="price">Price</label>
        <input
          v-model="product.price"
          type="number"
          id="price"
          class="form-control"
          placeholder="Price"
        />
      </div>
      <!-- Stock input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="stock">Stock</label>
        <input
          v-model="product.stock"
          type="number"
          id="stock"
          class="form-control"
          placeholder="Stock"
        />
      </div>
      <!-- Category input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="category">Category</label>
        <select
          v-model="product.category"
          id="category"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="Hobby">Hobby</option>
          <option value="Fashion">Fashion</option>
          <option value="Limited Edition">Limited Edition</option>
        </select>
      </div>
      <!-- Description input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="description">Description</label>
        <textarea
          v-model="product.description"
          class="form-control"
          placeholder="Write interesting description"
          id="description"
          style="height: 100px"
        ></textarea>
      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-around">
          <!-- Submit button -->
          <button
            class="btn btn-success btn-block col-sm-5"
            @click.prevent="addProduct"
          >
            Submit
          </button>
          <!-- Cancel -->
          <button class="btn btn-danger btn-block col-sm-5" @click="cancel">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        image_url: "",
        price: 0,
        stock: 0,
        category: "",
        description: "",
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.product);
    },
    cancel() {
      this.$router.push({ name: "Products" });
    },
  },
};
</script>

<style>
.header {
  text-transform: uppercase;
  text-align: center;
  margin-top: 2rem;
}
.container-form {
  border: black 1px solid;
  border-radius: 30px;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 25vw;
}
</style>
