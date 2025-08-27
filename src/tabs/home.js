export function createHome() {

    const home = document.createElement("div");
    home.classList.add("home");
    const heading = document.createElement("h1");
    heading.classList.add("home-heading");
    heading.textContent = "Welcome to Our Restaurant";
    home.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.classList.add("home-paragraph");
    paragraph.textContent = "Experience the best dining in the city.";
    home.appendChild(paragraph);
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("home-paragraph");
    paragraph2.textContent = "A great mix of different types of food with great flavors.";
    home.appendChild(paragraph2);
    const button = document.createElement("button");
    button.classList.add("home-button");
    button.textContent = "Reserve a Table";
    home.appendChild(button);
    button.addEventListener("click", () => {
        alert("Table reserved!");
    });

    return home;
}
