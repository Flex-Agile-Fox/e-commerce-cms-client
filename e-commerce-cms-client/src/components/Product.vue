<template>
    <div class="col-lg-3 col-md-4">
        <div class="card" style="width: 18rem;">
            <img :src="product.image_url" class="card-img-top" :alt="product.name">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Rp. {{product.price}}</p>
                <div class="action">
                    <router-link :to="'/editProduct/'+product.id" class="btn btn-primary btn-sm">Edit</router-link>
                    <a v-on:click="deleteDataProduct(product.id)" class="btn btn-primary btn-sm">delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Toastify from 'toastify-js'

export default {
  name: 'Product',
  props: ['product'],
  methods: {
    deleteDataProduct (id) {
      this.$store.dispatch('deleteDataProduct', id)
        .then(({ data }) => {
          Toastify({
            text: 'Data berhasil di hapus',
            duration: 3000,
            gravity: 'bottom', // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
          }).showToast()
          this.$store.dispatch('getDataProduct')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.btn-sm{
    width: 60px;
    margin: 2px;
}
</style>
