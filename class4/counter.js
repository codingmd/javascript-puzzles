function countTags (tag) {
	var pageBody = document.getElementsByTagName(tag);
	if (pageBody.length == 1) {
		document.write('There is ' + pageBody.length + ' tag of type ' + tag + ' on the page<br>');
	}
	else {
		document.write('There are ' + pageBody.length + ' tags of type ' + tag + ' on the page<br>');
	}
}

countTags('body');
countTags('h3');
countTags('title');
countTags('script');