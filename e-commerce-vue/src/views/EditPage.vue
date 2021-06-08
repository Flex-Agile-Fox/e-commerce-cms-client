<template>
  <div>
    <AddEditForm :product="product"/>
  </div>
</template>

<script>
import AddEditForm from '../components/AddEditForm'

export default {
  name: 'EditPage',
  components: {
    AddEditForm
  },
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        category: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    detailProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('detailProduct', id)

        .then(({ data }) => {
          this.product.name = data.data.name
          this.product.image_url = data.data.image_url
          this.product.category = data.data.category
          this.product.price = data.data.price
          this.product.stock = data.data.stock
        })
        .catch((err) => {
          console.log(err.response.data)
          // if (err.response) {
          //   const errors = err.response.data.errorMessages;
          //   swal("Failed to get detail product", errors.join(', '), "error");
          // }
        })
    }
  },
  created () {
    this.detailProduct()
  }
}
</script>
