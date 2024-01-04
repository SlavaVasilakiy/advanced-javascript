// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

'use strict';

class LibraryManager {
	#books;

	constructor(initialBooks = []) {
		if (this.hasDuplicateTitles(initialBooks)) {
			throw new Error('Initial book list contains duplicate titles.');
		}

		this.#books = [...initialBooks];
	}

	get allBooks() {
		return this.#books;
	}

	addBook(title) {
		if (this.#books.includes(title)) {
			throw new Error(
				`Book with title '${title}' already exists in the library.`
			);
		}

		this.#books.push(title);
	}

	removeBook(title) {
		const index = this.#books.indexOf(title);
		if (index === -1) {
			throw new Error(`Book with title '${title}' not found in the library.`);
		}

		this.#books.splice(index, 1);
	}

	hasBook(title) {
		if (!this.#books.includes(title)) {
			throw new Error(`Book with title '${title}' not found in the library.`);
		}
		return true;
	}

	hasDuplicateTitles(books) {
		const uniqueTitles = new Set(books);
		return uniqueTitles.size !== books.length;
	}
}

// Usage example
try {
	const library = new LibraryManager(['Book1', 'Book2', 'Book3']);

	console.log('Initial books:', library.allBooks);

	library.addBook('Book4');
	console.log('After adding Book4:', library.allBooks);

	library.removeBook('Book2');
	console.log('After removing Book2:', library.allBooks);

	console.log('Does library have Book3?', library.hasBook('Book3'));
	console.log('Does library have Book2?', library.hasBook('Book2'));
} catch (error) {
	console.error(error.message);
}

// Output:
// Initial books: [ 'Book1', 'Book2', 'Book3' ]
// After adding Book4: [ 'Book1', 'Book2', 'Book3', 'Book4' ]
// After removing Book2: [ 'Book1', 'Book3', 'Book4' ]
// Does library have Book3? true
// Book with title 'Book2' not found in the library.
