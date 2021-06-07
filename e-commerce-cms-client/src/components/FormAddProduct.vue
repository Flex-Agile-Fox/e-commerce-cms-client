<template>
    <div class="col-12">
         <form v-on:submit.prevent="adddDataProduct()">
            <div class="mb-2 row">
              <label class="col-sm-3 col-form-label">Nama Produk</label>
              <div class="col-sm-7">
                <input type="text" v-model="addProduct.name" class="form-control" placeholder="Masukan nama produk">
              </div>
            </div>
            <div class="mb-2 row">
              <label class="col-sm-3 col-form-label">Gambar Produk</label>
              <div class="col-sm-7">
                <input type="text" v-model="addProduct.image" class="form-control" placeholder="Masukan gambar produk">
              </div>
            </div>
            <div class="mb-2 row">
              <label class="col-sm-3 col-form-label">Harga Produk</label>
              <div class="col-sm-7">
                <input type="text" v-model="addProduct.price" class="form-control" placeholder="Masukan harga produk">
              </div>
            </div>
            <div class="mb-2 row">
              <label class="col-sm-3 col-form-label">Stok Produk</label>
              <div class="col-sm-7">
                <input type="text" v-model="addProduct.stock" class="form-control" placeholder="Masukan stok produk">
              </div>
            </div>
            <div class="mb-2 row">
              <label class="col-sm-3 col-form-label"></label>
              <div class="col-sm-1">
                <button type="submit" class="btn btn-primary">Simpan</button>
              </div>
              <div class="col-sm-1">
                <button class="btn btn-warning">Reset</button>
              </div>
            </div>
         </form>
    </div>
</template>

<script>
export default {
  name: 'FormAddProduct',
  data () {
    return {
      addProduct: {
        name: '',
        image: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    adddDataProduct () {
      const name = this.addProduct.name
      const imageURL = this.addProduct.image
      const price = parseInt(this.addProduct.price)
      const stock = parseInt(this.addProduct.stock)
      this.$store.dispatch('adddDataProduct', { name, imageURL, price, stock })
    }
  }
}
</script>

<style>

</style>
