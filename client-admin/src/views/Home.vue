<template>
  <div id="home">
    <Navbar></Navbar>
    <b-container>
      <b-col cols="12 mt-4">
        <b-card>
          <div class="datatable">
            <div class="datatable-header">
              <b-row align-h="between">
                <b-col cols="auto" class="mr-auto">Manage Products</b-col>
                <b-col cols="auto" class="">
                  <b-button
                    v-b-modal.modal-prevent-closing
                    variant="success"
                    size="sm"
                  >
                    <span class="button-icon">
                      <b-icon icon="plus" animation="fade"></b-icon>
                    </span>
                    <span class="button-label">New</span>
                  </b-button>
                  <!-- add product modal -->
                  <b-modal
                    id="modal-prevent-closing"
                    ref="modal"
                    title="Product Details"
                    @show="resetModal"
                    @hidden="resetModal"
                    @ok="handleOk"
                  >
                    <form ref="form" @submit.stop.prevent="addProduct">
                      <b-form-group></b-form-group>
                    </form>
                  </b-modal>
                  <!-- add product modal end -->
                </b-col>
              </b-row>
            </div>
            <div class="datatable-table">
              <b-table sticky-header="60vh" :items="items" :fields="fields">
                <template #cell(image_url)="data">
                  <b-img
                    :src="data.value"
                    fluid
                    width="100"
                    height="66"
                    class="product-image"
                  ></b-img>
                </template>
                <template #cell(price)="data">
                  <span>
                    {{ formatCurrency(data.value) }}
                  </span>
                </template>
              </b-table>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      fields: [
        { key: "id", tdClass: "align-middle", sortable: true },
        { key: "name", tdClass: "align-middle", sortable: true },
        { key: "image_url", label: "Image", tdClass: "align-middle" },
        { key: "price", tdClass: "align-middle", sortable: true },
        { key: "stock", tdClass: "align-middle", sortable: true },
        { key: "category", tdClass: "align-middle", sortable: true },
      ],
      items: [
        {
          id: 1,
          name: "Swallow Zepit",
          image_url:
            "https://i0.wp.com/energibangsa.id/wp-content/uploads/2019/11/swallow.jpg?fit=365%2C300&ssl=1",
          price: 15000,
          stock: 10,
          category: "Sandal",
        },
        {
          id: 2,
          name: "Ando Zepit",
          image_url:
            "https://i0.wp.com/energibangsa.id/wp-content/uploads/2019/11/swallow.jpg?fit=365%2C300&ssl=1",
          price: 14000,
          stock: 5,
          category: "Sandal",
        },
        {
          id: 3,
          name: "Bata Zepit",
          image_url:
            "https://i0.wp.com/energibangsa.id/wp-content/uploads/2019/11/swallow.jpg?fit=365%2C300&ssl=1",
          price: 16000,
          stock: 6,
          category: "Sandal",
        },
        {
          id: 4,
          name: "Carvill",
          image_url:
            "https://1.bp.blogspot.com/-CNZSmuzjIik/WmBAI-LddfI/AAAAAAAAAh8/2F_CWOnP4rUwV_6qRiu8Yd4ijzRkf-abwCLcBGAs/s1600/Daftar%2BSepatu%2BCarvil%2BSekolah%2BTerbaru%2BDan%2BTerlengkap.jpg",
          price: 20000,
          stock: 6,
          category: "Formal",
        },
        {
          id: 5,
          name: "Carvill Cowok",
          image_url:
            "https://s3.bukalapak.com/img/3853801463/s-330-330/CARVIL_SEPATU_PRIA_DRIVER_M_01_BROWN.png.webp",
          price: 24000,
          stock: 7,
          category: "Formal",
        },
        {
          id: 6,
          name: "Carvill Cewek",
          image_url:
            "https://dj7u9rvtp3yka.cloudfront.net/products/PIM-1543577016440-1b7d70fb-93bd-4493-8faa-d7e0caa9051f_v1-small.jpg",
          price: 25000,
          stock: 2,
          category: "Formal",
        },
      ],
      name: "",
      image_url: "",
      price: null,
      stock: null,
      category: "",
    };
  },
  methods: {
    formatCurrency(value) {
      if (value)
        return value.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      return;
    },
    resetModal() {
      this.name = "";
      this.image_url = "";
      this.price = null;
      this.stock = null;
      this.category = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
  },
};
</script>

<style>
.datatable {
  position: relative;
}
.sr-only {
  display: none;
}
.datatable-header {
  background: #efefef;
  color: #212529;
  border: solid #dee2e6;
  border-width: 1px 0 0 0;
  padding: 1rem 1rem;
  font-weight: 600;
}
.product-image {
  width: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
