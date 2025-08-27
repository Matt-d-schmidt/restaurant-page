import { createReviews } from "./tabs/review.js";
import { createMenu } from "./tabs/menu.js";
import { createHome } from "./tabs/home.js";
import "./styling/style.css";

const content = document.getElementById("content");
const homeBTN = document.getElementById("Home");
const menuBTN = document.getElementById("Menu");
const reviewBTN = document.getElementById("Reviews");

function page() {

    content.appendChild(createHome());

    homeBTN.addEventListener("click", () => {
        content.replaceChild(createHome(), content.firstChild);
    });

    menuBTN.addEventListener("click", () => {
        content.replaceChild(createMenu(), content.firstChild);
    });

    reviewBTN.addEventListener("click", () => {
        content.replaceChild(createReviews(), content.firstChild);
    });
};

page();