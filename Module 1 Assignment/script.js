const textBox = document.getElementById('userInput');
const button = document.getElementById('addToList');
const dynamicContainer = document.getElementById('dynamic');
const list = document.getElementById('myList');

function addListItem() {
    let newListItem = textBox.value;

    let listItem = document.createElement('li');
    listItem.textContent = newListItem;

    dynamicContainer.appendChild(listItem);

    textBox.value = "";
}