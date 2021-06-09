<template>
  <tr>
    <th scope="row">{{listNumber}}</th>
    <td>
      <img :src="product.image_url" class="card-img-top" :alt="product.name" style="width: 60px; height:width: 60px;">
    </td>
    <td>{{product.name}}</td>
    <td>Rp. {{priceFormatNumber}} ,-</td>
    <td>{{product.stock}}</td>
    <td>
      <router-link :to="'/editProduct/'+product.id" class="btn btn-primary btn-sm" style="width:80px;">Edit</router-link>
      <a v-on:click="deleteDataProduct(product.id)" class="btn btn-danger btn-sm" style="width:80px; color:white">Hapus</a>
    </td>
  </tr>
    <!-- <div class="col-lg-3 col-md-4">
        <div class="card" style="width: 18rem;">
            <img :src="product.image_url" class="card-img-top" :alt="product.name">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Rp. {{product.price}}</p>
                <div class="action">
                    <router-link :to="'/editProduct/'+product.id" class="btn btn-primary btn-sm" style="width:80px;">Edit</router-link>
                    <a v-on:click="deleteDataProduct(product.id)" class="btn btn-primary btn-sm" style="width:80px;">Hapus</a>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Product',
  props: ['product', 'index'],
  methods: {
    deleteDataProduct (id) {
      swal({
        title: 'Anda yakin?',
        text: 'Data yang di hapus tidak dapat dikembalikan!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$store.dispatch('deleteDataProduct', id)
              .then(({ data }) => {
                this.$store.dispatch('getDataProduct')
                swal('Berhasil! data telah dihapus!', {
                  icon: 'success'
                })
              }).catch((err) => {
                console.log(err)
              })
          } else {
            swal('data tidak jadi dihapus!')
          }
        })
    }
  },
  computed: {
    priceFormatNumber () {
      return this.product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    },

    listNumber () {
      return parseInt(this.index) + 1
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
