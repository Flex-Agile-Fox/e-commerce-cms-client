<template>
  <div class="col-12">
    <form v-on:submit.prevent="editDataProduct()">
                <div class="mb-2 row">
                  <label class="col-sm-3 col-form-label">Nama Produk</label>
                  <div class="col-sm-7">
                    <input type="text" v-model="productDetail.name" class="form-control" placeholder="Masukan nama produk">
                  </div>
                </div>
                <div class="mb-2 row">
                  <label class="col-sm-3 col-form-label">Gambar Produk</label>
                  <div class="col-sm-7">
                    <input type="text" v-model="productDetail.image_url" class="form-control" placeholder="Masukan gambar produk">
                  </div>
                </div>
                <div class="mb-2 row">
                  <label class="col-sm-3 col-form-label">Harga Produk</label>
                  <div class="col-sm-7">
                    <input type="text" v-model="productDetail.price" class="form-control" placeholder="Masukan harga produk">
                  </div>
                </div>
                <div class="mb-2 row">
                  <label class="col-sm-3 col-form-label">Stok Produk</label>
                  <div class="col-sm-7">
                    <input type="text" v-model="productDetail.stock" class="form-control" placeholder="Masukan stok produk">
                  </div>
                </div>
                <div class="mb-2 row">
                  <label class="col-sm-3 col-form-label"></label>
                  <div class="col-sm-1">
                    <button type="submit" class="btn btn-primary">Simpan</button>
                  </div>
                  <div class="col-sm-1">
                    <router-link to="/home" class="btn btn-warning" style="margin-left:-15px;">Kembali</router-link>
                  </div>
                </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormEditProduct',
  data () {
    return {
      productDetail: {}
    }
  },
  methods: {
    getDataDetail () {
      this.$store.dispatch('getDataDetail', this.$route.params.id)
        .then(({ data }) => {
          console.log(data.data)
          this.productDetail = data.data
        }).catch((err) => {
          console.log(err)
        })
    },

    editDataProduct () {
      this.$store.dispatch('editDataProduct', { id: this.$route.params.id, product: this.productDetail })
    }
  },
  created () {
    this.getDataDetail()
  }
}
</script>

<style>
.col-form-label{
  display: flex;
  flex-direction: row-reverse;
}
</style>
