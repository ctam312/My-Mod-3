// Your code here

window.addEventListener("DOMContentLoaded", () => {
    
    const addButton = document.getElementById("add");
    console.log("add button ", addButton);

    addButton.addEventListener("click", (event) => {
        event.preventDefault();

        const itemName = document.getElementById("name").ariaValueMax;
        console.log("item name", itemName);

        const itemType = document.getElementById("type").ariaValueMax;
        
        console.log("item type ", itemType)
    })
})