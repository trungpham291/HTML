// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');
var newItemFirst = document.createTextNode('kale');
newItemFirst.appendChild(newItemFirst);
list.insertBefore(newItemFirst, list.firstChild);


var listItems = document.querySelectorAll('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
for (i=0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<spam>' + totalItems + '</spam>';
heading.innerHTML = newHeading;