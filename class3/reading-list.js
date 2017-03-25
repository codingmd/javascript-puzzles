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
	{'title': 'Book 1', 'author': 'John Deer', 'alreadyRead': true},
	{'title': 'Book 2', 'author': 'Amy Doe', 'alreadyRead': false},
	{'title': 'Book 3', 'author': 'Fred Daily', 'alreadyRead': true}
];

function logBook(bookList) {
	for (var i = 0; i < this.bookList.length; i++) {
		document.write('\"' + bookList[i].title + '\" by ' + bookList[i].author +'<br>')
		if (this.bookList[i].alreadyRead) {
			document.write('You already read \"' + bookList[i].title + '\" by ' +
				bookList[i].author + '<br>');
		}
		else {
			document.write('You still need to read \"' + bookList[i].title + '\" by ' +
				bookList[i].author + '<br>');
		}
	}
}

logBook(bookList);

