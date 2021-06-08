<template>
  <div>
    <AddEditForm :product="product"/>
  </div>
</template>

<script>
import AddEditForm from '../components/AddEditForm'

export default {
  name: 'AddPage',
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
  }
}
</script>
