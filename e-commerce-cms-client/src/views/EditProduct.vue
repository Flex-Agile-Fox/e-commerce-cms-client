<template>
  <div class="container container-form">
    <h1 class="header">Edit Product</h1>
    <form>
      <!-- Name input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="name">Name</label>
        <input type="text" id="name" class="form-control" placeholder="Name" />
      </div>
      <!-- Image Url -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="image_url">Image Url</label>
        <input
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
          id="category"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">Hobby</option>
          <option value="2">Fashion</option>
          <option value="3">Limited Edition</option>
        </select>
      </div>
      <!-- Description input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="description">Description</label>
        <textarea
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
          <button type="submit" class="btn btn-success btn-block col-sm-5">
            Submit
          </button>
          <!-- Register -->
          <button type="submit" class="btn btn-danger btn-block col-sm-5">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "EditProduct",
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
