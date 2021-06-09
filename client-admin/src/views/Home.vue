<template>
	<div id="home">
		<b-container>
			<b-col cols="12 mt-4">
				<b-card>
					<div class="datatable">
						<div class="datatable-header">
							<b-row align-h="between">
								<b-col cols="auto" class="mr-auto">Manage Products</b-col>
								<b-col cols="auto" class="">
									<b-button
										variant="success"
										size="sm"
										@click="$router.push({ name: 'AddProduct' })"
									>
										<span class="button-icon">
											<b-icon icon="plus" animation="fade"></b-icon>
										</span>
										<span class="button-label">New</span>
									</b-button>
								</b-col>
							</b-row>
						</div>
						<div class="datatable-table">
							<b-table sticky-header="60vh" :items="products" :fields="fields">
								<template #cell(image_url)="data">
									<b-img
										:src="data.value"
										fluid
										width="50"
										height="30"
										class="product-image"
									></b-img>
								</template>
								<template #cell(price)="data">
									<span>
										{{ formatCurrency(data.value) }}
									</span>
								</template>
								<template #cell(actions)="row">
									<span>
										<b-button
											class="mr-3"
											variant="primary"
											size="sm"
											@click="$router.push({ path: `/edit/${row.item.id}` })"
											>Edit</b-button
										>
									</span>
									<span>
										<b-button
											variant="danger"
											size="sm"
											@click="deleteProduct(row.item.id)"
											>Delete</b-button
										>
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
export default {
	name: 'Home',
	computed: {
		products() {
			return this.$store.state.products;
		},
	},
	data() {
		return {
			fields: [
				{ key: 'id', tdClass: 'align-middle', sortable: true },
				{ key: 'name', tdClass: 'align-middle', sortable: true },
				{ key: 'image_url', label: 'Image', tdClass: 'align-middle' },
				{ key: 'price', tdClass: 'align-middle', sortable: true },
				{ key: 'stock', tdClass: 'align-middle', sortable: true },
				{ key: 'category', tdClass: 'align-middle', sortable: true },
				{ key: 'actions', tdClass: 'align-middle', label: 'Actions' },
			],
			product: {
				name: '',
				image_url: '',
				price: null,
				stock: null,
				category: '',
			},
		};
	},
	methods: {
		formatCurrency(value) {
			if (value)
				return value.toLocaleString('id-ID', {
					style: 'currency',
					currency: 'IDR',
				});
			return;
		},
		deleteProduct(id) {
			this.$bvModal
				.msgBoxConfirm('Are you sure want to delete this product?', {
					title: 'Confirmation',
					size: 'sm',
					buttonSize: 'sm',
					okVariant: 'danger',
					okTitle: 'YES',
					cancelTitle: 'NO',
					footerClass: 'p-2',
					hideHeaderClose: false,
					centered: true,
				})
				.then((value) => {
					if (value) this.$store.dispatch('delete', id);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	created() {
		this.$store.dispatch('fetchProducts');
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
	color: #403866;
	border: solid #dee2e6;
	border-width: 1px 0 1px 0;
	padding: 1rem 1rem;
	font-weight: 900;
	font-size: 20px;
}
.product-image {
	width: 100px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.mr-3 {
	margin-right: 3px;
}
</style>
