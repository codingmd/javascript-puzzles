//Add a script tag to the bottom.
//See aboutme.html line 23


//(In JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
var pageBody = document.getElementsByTagName('body')[0];
pageBody.style.fontFamily = 'Arial, sans-serif';


//(In JavaScript) Replace the content of each of the spans (nickname, favorites, hometown) 
//with your own information.
document.getElementById('nickname').innerHTML = 'Marty';
document.getElementById('favorites').innerHTML = 'Hiking, running,...';
document.getElementById('hometown').innerHTML = 'Somewhere';

//Iterate through each li and add a class of "listitem". Add a style tag that sets a rule 
//for "listitem" to make the color red.
var liElements = document.getElementsByTagName('li');
for (var i = 0; i < liElements.length; i++) {
	liElements[i].setAttribute("class","listitem");
	document.getElementsByClassName('listitem').style.color = 'red';
}


//Create a new img element and set its src attribute to a picture of you. Append that element to the body.
var image = document.createElement('img');
image.setAttribute('src', 'https://cdn.pixabay.com/photo/2012/04/18/18/33/lego-37512_960_720.png');
pageBody.appendChild(image);
