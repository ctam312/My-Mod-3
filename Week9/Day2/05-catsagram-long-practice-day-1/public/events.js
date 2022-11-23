window.addEventListener("DOMContentLoaded", () => {
    const addItemButton = document.getElementById('add-item');
    const listContainer = document.querySelector(".comment >ul");
    
    addItemButton.addEventListener('click', () => {
        const listAddElement = document.getElementById("list-add");

        console.log("list add element", listAddElement);
        const listAddElementValue = listAddElement.value;
        console.log("list add element value", listAddElementValue);

        const listItem = document.createElement('li');
        listItem.innerText = listAddElementValue;

        listContainer.appendChild(listItem);

        listAddElement.value = ""
    });

});