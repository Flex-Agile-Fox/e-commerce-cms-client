<template>
	<div
		class="
			container
			d-flex
			justify-content-center
			align-items-center
			height-100
			form-container
		"
	>
		<form class="form-class mt-30">
			<h1 class="title-form mb-4">Edit Product</h1>
			<div class="mb-4">
				<label for="productName" class="form-label">Name</label>
				<input
					v-model="product.name"
					id="productName"
					type="text"
					class="form-control"
				/>
			</div>
			<div class="mb-4">
				<label for="imageUrl" class="form-label">Image URL</label>
				<input
					v-model="product.image_url"
					id="imageUrl"
					type="text"
					class="form-control"
				/>
			</div>
			<div class="row mb-4">
				<div class="col">
					<label for="price" class="form-label">Price</label>
					<input
						v-model="product.price"
						id="price"
						type="number"
						class="form-control"
					/>
				</div>
				<div class="col">
					<label for="stock" class="form-label">Stock</label>
					<input
						v-model="product.stock"
						id="stock"
						type="number"
						class="form-control"
					/>
				</div>
			</div>
			<div class="row">
				<label for="category" class="form-label"> Category</label>
				<div class="col-6 form-check mb-2">
					<input
						v-model="product.category"
						type="radio"
						name="category"
						value="Casual"
						id="category1"
					/>
					<label class="category-label" for="category1">Casual</label>
				</div>
				<div class="col-6 form-check mb-2">
					<input
						v-model="product.category"
						type="radio"
						name="category"
						value="Formal"
						id="category2"
					/>
					<label class="category-label" for="category2">Formal</label>
				</div>
				<div class="col-6 form-check mb-2">
					<input
						v-model="product.category"
						type="radio"
						name="category"
						value="Sneaker"
						id="category3"
					/>
					<label class="category-label" for="category3">Sneaker</label>
				</div>
				<div class="col-6 form-check mb-2">
					<input
						v-model="product.category"
						type="radio"
						name="category"
						value="Sports"
						id="category4"
					/>
					<label class="category-label" for="category4">Sports</label>
				</div>
			</div>
			<div class="d-grip gap-2 d-md-flex justify-content-md-end">
				<button
					@click.prevent="editProduct"
					class="btn btn-primary btn-sm"
					type="submit"
				>
					Save
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import Toastify from 'toastify-js';

export default {
	name: 'EditProduct',
	data() {
		return {
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
		editProduct() {
			this.$store.dispatch('editProduct', {
				id: this.$route.params.id,
				product: this.product,
			});
		},
	},
	created() {
		this.$store
			.dispatch('getProduct', this.$route.params.id)
			.then(({ data }) => {
				this.product.name = data.data.name;
				this.product.image_url = data.data.image_url;
				this.product.price = data.data.price;
				this.product.stock = data.data.stock;
				this.product.category = data.data.category;
			})
			.catch((err) => {
				Toastify({
					text: err.response.data.message,
					backgroundColor: '#FF6263',
				}).showToast();
			});
	},
};
</script>

<style></style>
