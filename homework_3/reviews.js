'use strict';

const initialData = [
	{
		product: 'Apple iPhone 13',
		reviews: [
			{
				id: '1',
				text: 'Отличный телефон! Батарея держится долго.',
			},
			{
				id: '2',
				text: 'Камера супер, фото выглядят просто потрясающе.',
			},
		],
	},
	{
		product: 'Samsung Galaxy Z Fold 3',
		reviews: [
			{
				id: '3',
				text: 'Интересный дизайн, но дорогой.',
			},
		],
	},
	{
		product: 'Sony PlayStation 5',
		reviews: [
			{
				id: '4',
				text: 'Люблю играть на PS5, графика на высоте.',
			},
		],
	},
];

//=====================================================================================================================

if (!localStorage.getItem('reviews')) {
	localStorage.setItem('reviews', JSON.stringify(initialData));
}

const lsDataJSON = JSON.parse(localStorage.getItem('reviews'));

function init() {
	const reviewsContainerElement = document.querySelector('.reviews-container');

	lsDataJSON.forEach(product => {
		const productTitleElement = document.createElement('h2');
		productTitleElement.textContent = product.product;
		reviewsContainerElement.appendChild(productTitleElement);
		productTitleElement.classList.add(
			`product-title-${product.product.replace(/\s/g, '-')}`
		);

		const reviewsListElement = document.createElement('ol');
		reviewsContainerElement.appendChild(reviewsListElement);
		reviewsListElement.style.display = 'none';

		productTitleElement.addEventListener('click', () => {
			reviewsListElement.style.display =
				reviewsListElement.style.display === 'none' ? 'block' : 'none';
		});
		productTitleElement.addEventListener('mouseover', () => {
			productTitleElement.classList.add('red-color');
		});
		productTitleElement.addEventListener('mouseout', () => {
			productTitleElement.classList.remove('red-color');
		});

		product.reviews.forEach(review => {
			const reviewElement = document.createElement('li');
			reviewElement.textContent = review.text;

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';

			deleteButton.addEventListener('click', () => {
				const reviewIndex = product.reviews.findIndex(r => r.id === review.id);
				if (reviewIndex !== -1) {
					product.reviews.splice(reviewIndex, 1);
					localStorage.setItem('reviews', JSON.stringify(lsDataJSON));
					reviewsListElement.removeChild(reviewElement);
				}
			});

			reviewElement.appendChild(deleteButton);
			reviewsListElement.appendChild(reviewElement);
			reviewElement.classList.add(
				`${product.product.replace(/\s/g, '-')}-id-${review.id}`
			);
		});
	});
}

function reloadStorage() {
	localStorage.setItem('reviews', JSON.stringify(initialData));
}

init();
