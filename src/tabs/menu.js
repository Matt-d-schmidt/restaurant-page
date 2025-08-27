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
        const listItem = document.createElement("div");
        listItem.classList.add("menu-item");
        const button = document.createElement("button");
        button.classList.add("menu-button");
        listItem.textContent = dish;
        list.appendChild(listItem);
        button.textContent = "Order Now";
        list.appendChild(button);

        button.addEventListener("click", () => {
            alert(`${dish} ordered!`);
        });
    });
    menu.appendChild(list);

    return menu;
}