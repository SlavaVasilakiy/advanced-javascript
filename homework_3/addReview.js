'use strict';

const addReviewContainerElement = document.querySelector('.select-product');
const lsDataJSON = JSON.parse(localStorage.getItem('reviews'));
const selectProductElement = document.querySelector('.select-product');

function addProductsElements(data) {
	data.forEach(product => {
		const optionElement = document.createElement('option');
		optionElement.textContent = product.product;
		addReviewContainerElement.appendChild(optionElement);
	});
}

addProductsElements(lsDataJSON);

const newOptionElement = document.createElement('option');
newOptionElement.textContent = 'Add New Product';
addReviewContainerElement.appendChild(newOptionElement);
const addNewProductContainer = document.querySelector(
	'.add-new-product-container'
);

selectProductElement.addEventListener('change', e => {
	if (e.target.value === 'Add New Product') {
		addNewProductContainer.classList.toggle('hidden', false);
	} else {
		addNewProductContainer.classList.toggle('hidden', true);
	}
});

function addReview() {
	const addNewProductInput = document.querySelector('.add-new-product-input');
	const addReviewTextarea = document.querySelector('.add-review-textarea');
	const productToUpdate = lsDataJSON.find(
		product => product.product === selectProductElement.value
	);

	if (addReviewTextarea.value === '') {
		alert('Please enter a review');
		return;
	}

	if (selectProductElement.value === 'Add New Product') {
		if (addNewProductInput.value === '') {
			alert('Please enter a product name');
			return;
		}

		const newProduct = {
			product: addNewProductInput.value,
			reviews: [
				{
					id: Date.now().toString(),
					text: addReviewTextarea.value,
				},
			],
		};
		lsDataJSON.push(newProduct);
		const optionElement = document.createElement('option');
		optionElement.textContent = addNewProductInput.value;
		addReviewContainerElement.appendChild(optionElement);
		addNewProductInput.value = '';
	} else {
		productToUpdate.reviews.push({
			id: Date.now().toString(),
			text: addReviewTextarea.value,
		});
	}

	localStorage.setItem('reviews', JSON.stringify(lsDataJSON));
	addReviewTextarea.value = '';
}
