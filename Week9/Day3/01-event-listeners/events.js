window.addEventListener("DOMContentLoaded", () => {
    const redInput = document.getElementById("red-input");
    console.log("red input element", redInput);

    redInput.addEventListener("input", () => {
        const value = redInput.value;

        console.log("red input value", value);

        if (value === "red") redInput.style.backgroundColor = "red";
        else redInput.style.backgroundColor = "";
    });

    const addItemButton = document.getElementById('add-item');
    const listContainer = document.querySelector("#section-2 >ul");
    
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

    const backgroundSection = document.getElementById("section-3");
    console.log("section 3", backgroundSection)

    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('change', () => {
        const backgroundColorValue = colorSelect.value;
        backgroundSection.style.backgroundColor = backgroundColorValue;
    });
    

});

