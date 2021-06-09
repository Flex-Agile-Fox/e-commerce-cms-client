<template>
  <div class="container">
    <table class="fixed table table-striped table-fixed">
      <thead>
        <tr>
          <th style="width: 5%" scope="col">No</th>
          <th style="width: 15%" scope="col">Image</th>
          <th style="width: 25%" scope="col">Name</th>
          <th style="width: 15%" scope="col">Category</th>
          <th style="width: 10%" scope="col">Stock</th>
          <th style="width: 20%" scope="col">Price</th>
          <th style="width: 10%" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row">{{ index+1 }}</th>
          <td>
            <img :src="product.image_url" style="width: 100px; height: 50px">
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.stock.toLocaleString() }}</td>
          <td>Rp. {{ product.price.toLocaleString() }}</td>
          <td>
            <a class="mx-2" href="#"><i class="fa fa-edit text-warning" @click.prevent="toEditPage(product.id)"></i></a>
            <a class="mx-2" href="#"><i class="fa fa-trash text-danger" @click.prevent="deleteProduct(product.id)"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'ProductsTable',
  props: ['products'],
  methods: {
    toEditPage (id) {
      this.$router.push({ name: 'EditPage', params: { id } })
      this.$store.commit('setPage', 'edit')
    },
    deleteProduct (id) {
      swal('Are you sure you want to delete this?', {
        buttons: ['No', true]
      })
        .then((value) => {
          if (value === true) this.$store.dispatch('deleteProduct', id)
        })
    }
  }
}
</script>

<style>
th, td {
  text-align: center;
}
table.fixed { table-layout:fixed; }
table.fixed td { overflow: hidden; }
</style>
