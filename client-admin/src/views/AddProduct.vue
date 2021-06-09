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
		<form class="mt-30 form-class">
			<h1 class="title-form mb-4">Add Product</h1>
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
					@click.prevent="addProduct"
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
export default {
	name: 'AddProduct',
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
		addProduct() {
			this.$store.dispatch('addProduct', this.product);
		},
	},
};
</script>

<style>
.form-container form {
	padding: 20px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.mt-30 {
	margin-top: 30px;
}
.height-100 {
	height: 100%;
}
.form-class h1 {
	text-align: center;
	font-size: 20px;
	font-weight: 900;
}
label.form-label {
	font-size: 16px;
	font-weight: 600;
}
.form-class {
	width: 360px;
	color: #403866;
}
#productName,
#imageUrl,
#price,
#stock {
	font-weight: 300;
	font-size: 14px;
	color: #403866;
}
.category-label {
	margin-left: 5px;
	font-size: 14px;
}
</style>
