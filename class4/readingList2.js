// Create a webpage with an h1 of "My Book List".
//See readingList2.html line 8

// Add a script tag to the bottom of the page, where all your JavaScript will go.
//See readingList2.html line 9

// Copy the array of books from the previous exercise.
var bookList = [
	{'title': 'Green Eggs And Ham', 'author': 'Dr. Seuss', 'alreadyRead': true},
	{'title': 'The Planet Of The Apes', 'author': 'Pierre Boulle', 'alreadyRead': false},
	{'title': 'The Catcher In The Rye', 'author': 'J.D. Salinger', 'alreadyRead': true}
];
var url = [
	{'url': 'https://c1.staticflickr.com/6/5524/14130147050_07c4d84987_b.jpg'},
	{'url': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Planet_of_the_Apes_book_cover.jpg'},
	{'url': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Catcher-in-the-rye-red-cover.jpg'},
]

// Iterate through the array of books. For each book, create a p element with the book title 
// and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element 
//for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
var pageBody = document.getElementsByTagName('body')[0];

for (var i in bookList) {
	var paragraph = document.createElement('p');
	var unordered = document.createElement('ul');
	var liElement = document.createElement('li');
	var image = document.createElement('img');
	liElement.innerHTML = bookList[i].title + ' by ' + bookList[i].author + '<br>';
	bookList[i].url = url[i].url;
	image.setAttribute('src', bookList[i].url);
	image.setAttribute('height', '250');	
	if (bookList[i].alreadyRead) {
		liElement.style.color = 'red';
	}
	liElement.appendChild(image);
	unordered.appendChild(liElement);
	paragraph.appendChild(unordered);
	pageBody.appendChild(paragraph);
}



