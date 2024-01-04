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

document.addEventListener('DOMContentLoaded', function () {
	const reviewsContainer = document.getElementById('reviewsContainer');
	initialData.forEach(product => {
		product.reviews.forEach(review => {
			const reviewDiv = document.createElement('div');
			reviewDiv.textContent = `${product.product}: ${review.text}`;
			reviewsContainer.appendChild(reviewDiv);
		});
	});
});

function addReview() {
	const reviewInput = document.getElementById('reviewInput').value;
	const reviewsContainer = document.getElementById('reviewsContainer');

	if (reviewInput.length < 50 || reviewInput.length > 500) {
		alert('Длина отзыва должна быть от 50 до 500 символов.');
		return;
	}

	const newReview = document.createElement('div');
	newReview.textContent = reviewInput;
	reviewsContainer.appendChild(newReview);

	// Очищаем поле ввода
	document.getElementById('reviewInput').value = '';
}

