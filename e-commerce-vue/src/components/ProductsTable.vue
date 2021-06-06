<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>
            <img :src="product.image_url" style="width: 100px; height: 50px">
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.price }}</td>
          <td>
            <a class="mx-2" href="#"><i class="fa fa-edit text-warning" @click.prevent="toEditPage(product.id)"></i></a>
            <a class="mx-2" href="#"><i class="fa fa-trash text-danger"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProductsTable',
  props: ['products'],
  methods: {
    toEditPage (id) {
      this.$router.push({ name: 'EditPage', params: { id } })
    }
  }
}
</script>

<style>

</style>
