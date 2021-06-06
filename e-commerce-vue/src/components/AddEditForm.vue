<template>
  <div class="container mt-5">
    <div class="card mb-3 mx-auto" style="max-width: 18rem;" id="addCard">
      <form class="mb-3">
        <div class="mb-3 px-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3 px-3">
          <label for="image_url" class="form-label">Image Url</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3 px-3">
          <label for="category" class="form-label">Category</label>
          <div>
            <select class="form-select" aria-label="Default select example" style="width:100%;padding:8px 2px" id="addCategory">
              <option value="" selected>Select Status</option>
              <option value="Backlog">Shirt</option>
              <option value="Todo">T-Shirt</option>
              <option value="Doing">Shoes</option>
              <option value="Done">Hat</option>
              <option value="Done">Pants</option>
            </select>
          </div>
        </div>
        <div class="mb-3 px-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control">
        </div>
        <div class="mb-3 px-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" class="form-control">
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

}
</script>

<style>

</style>