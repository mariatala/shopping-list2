const formItem = document.getElementById("input-form")
const inputItem = document.getElementById("input-item")
const listItems= document.getElementById("list-items")

function addItem(e){
    e.preventDefault();
    const newItem = inputItem.value;
    
    if (newItem === ''){
        alert('Please Enter an Item');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton("remove-item");
    li.appendChild(button);

    listItems.appendChild(li);

    inputItem.value = '';
}
formItem.addEventListener('submit', addItem)

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon("fa-solid fa-xmark")
    button.appendChild(icon)

    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}