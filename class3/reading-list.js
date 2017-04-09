// Create an array of objects, where each object describes a book 
// and has properties for the title (a string), author (a string), 
// and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book 
// title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on 
// whether you read it yet or not. If you read it, log a string 
// like 'You already read "The Hobbit" by J.R.R. Tolkien', and if 
// not, log a string like "You still need to read"The Lord of the
//  Rings" by J.R.R. Tolkien."

var bookList = [
	{'title': 'Green Eggs And Ham', 'author': 'Dr. Seuss', 'alreadyRead': true},
	{'title': 'The Planet Of The Apes', 'author': 'Pierre Boulle', 'alreadyRead': false},
	{'title': 'The Catcher In The Rye', 'author': 'J.D. Salinger', 'alreadyRead': true}
];

function logBook(bookList) {
	for (var i = 0; i < this.bookList.length; i++) {
		document.write(bookList[i].title + ' by ' + bookList[i].author + '<br>');
		if (this.bookList[i].alreadyRead) {
			document.write('You already read \"' + bookList[i].title + '\" by ' + bookList[i].author + '<br><br>');
		}
		else {
			document.write('You still need to read \"' + bookList[i].title + '\" by ' + bookList[i].author + '<br><br>');
		}
	}
}

logBook(bookList);

