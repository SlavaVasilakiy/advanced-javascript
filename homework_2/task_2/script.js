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

const reviewsContainer = document.getElementById('reviewsContainer');
// Добавляем выпадающий список для выбора товара один раз
const productSelect = document.createElement('select');
productSelect.id = 'productSelect';

initialData.forEach(product => {
	const option = document.createElement('option');
	option.value = product.product;
	option.textContent = product.product;
	productSelect.appendChild(option);
});

reviewsContainer.appendChild(productSelect);

function addReview() {
	const reviewInput = document.getElementById('reviewInput').value;
	const selectedProduct = productSelect.options[productSelect.selectedIndex].value;

	if (reviewInput.length < 50 || reviewInput.length > 500) {
		alert('Длина отзыва должна быть от 50 до 500 символов.');
		return;
	}

	// Находим выбранный продукт в массиве
	const product = initialData.find(item => item.product === selectedProduct);

	// Создаем новый отзыв и добавляем его в массив
	const newReview = {
		id: String(Math.random()), // Генерируем временный идентификатор
		text: reviewInput,
	};

	product.reviews.push(newReview);

	// Очищаем поле ввода
	document.getElementById('reviewInput').value = '';

	// Переотображаем отзывы
	displayReviews();
}

function displayReviews() {
	const reviewsContainer = document.getElementById('reviewsContainer');
	reviewsContainer.innerHTML = ''; // Очищаем контейнер перед отображением

	initialData.forEach(product => {
		product.reviews.forEach(review => {
			const reviewDiv = document.createElement('div');
			reviewDiv.textContent = `${product.product}: ${review.text}`;
			reviewsContainer.appendChild(reviewDiv);
		});
	});

	// Обновляем опции выпадающего списка
	updateProductSelectOptions();
}

function updateProductSelectOptions() {
	const productSelect = document.getElementById('productSelect');
	productSelect.innerHTML = '';

	initialData.forEach(product => {
		const option = document.createElement('option');
		option.value = product.product;
		option.textContent = product.product;
		productSelect.appendChild(option);
	});
}