export function createMenu() {

    const menu = document.createElement("div");
    menu.classList.add("menu");
    const heading = document.createElement("h1");
    heading.classList.add("menu-heading");
    heading.textContent = "Our Menu";
    menu.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.classList.add("menu-paragraph");
    paragraph.textContent = "Explore our delicious dishes.";
    menu.appendChild(paragraph);
    const list = document.createElement("ul");
    list.classList.add("menu-list");
    const dishes = ["Spaghetti Carbonara", "Margherita Pizza", "Tiramisu"];
    dishes.forEach(dish => {
        const itemName = document.createElement("div");
        itemName.classList.add("menu-item");
        itemName.textContent = dish;
        const button = document.createElement("button");
        button.classList.add("menu-button");
        button.textContent = "Order Now";
        itemName.appendChild(button);

        menu.appendChild(itemName);

        button.addEventListener("click", () => {
            alert(`${dish} ordered!`);
        });
    });
    menu.appendChild(list);

    return menu;
}