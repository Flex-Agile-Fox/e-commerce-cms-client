<template>
    <div class="col-lg-3 col-md-6">
        <div class="card" style="width: 15rem;">
            <img src="https://images.tokopedia.net/img/cache/500-square/product-1/2019/10/21/5362448/5362448_6401e753-e548-435a-9c33-5714db5aa839_700_700.jpg.webp" class="card-img-top" alt="">
            <!-- <img src="gambar.jpg" class="card-img-top" alt="gambar.jpg"> -->
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Rp. {{product.price}}</p>
                <div class="action">
                    <a href="#" class="btn btn-primary btn-sm">edit</a>
                    <a v-on:click="deleteDataProduct(product.id)" class="btn btn-primary btn-sm">delete</a>
                    <!-- <a v-on:click="$emit('deleteDataProduct', product.id)" class="btn btn-primary btn-sm">delete</a> -->
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
