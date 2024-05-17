const formItem = document.getElementById('input-form');
const inputItem = document.getElementById('input-item');
const listItems = document.getElementById('list-items');
const clearBtn = document.getElementById('clr-btn');
const filterBtn = document.getElementById('filter-item');

//Function that adds an item to the list

function addItem(e) {
	e.preventDefault();
	const newItem = inputItem.value;

	if (newItem === '') {
		alert('Please Enter an Item');
		return;
	}

	const li = document.createElement('li');
	li.appendChild(document.createTextNode(newItem));

	const button = createButton('remove-item');
	li.appendChild(button);

	listItems.appendChild(li);

	checkUI();

	inputItem.value = '';
}

function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;

	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);

	return button;
}

function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

//Function that removes an item from the list
function removeItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		confirm('Are you sure you want to delete item?');
		e.target.parentElement.parentElement.remove();
	}
	checkUI();
}

// //Function that clears the entire list item
function clearList() {
	confirm('This will delete the entire list');
	while (listItems.firstChild) {
		listItems.removeChild(listItems.firstChild);
	}
	checkUI();
}
function filterItems(e) {
	const items = listItems.querySelectorAll('li');
	const text = e.target.value.toLowerCase();

	items.forEach((item) => {
		const itemValue = item.firstChild.textContent.toLowerCase();

		if (itemValue.indexOf(text) != -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}

function checkUI() {
	const items = listItems.querySelectorAll('li');

	if (items.length == 0) {
		clearBtn.style.display = 'none';
		filterBtn.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		filterBtn.style.display = 'block';
	}
}

formItem.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearList);
filterBtn.addEventListener('input', filterItems);

checkUI();
