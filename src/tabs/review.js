let people = [
    {
        id: 1,
        fname: "John",
        lname: "Doe",
        email: "john.doe@example.com",
        message: "loved the food!"
    },
    {
        id: 2,
        fname: "Jane",
        lname: "Smith",
        email: "jane.smith@example.com",
        message: "amazing!"
    }
]

export function createReviews() {

    const reviews = document.createElement("div");
    reviews.classList.add("reviews");
    const heading = document.createElement("h1");
    heading.classList.add("reviews-heading");
    heading.textContent = "Customer Reviews";
    reviews.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.classList.add("reviews-paragraph");
    paragraph.textContent = "See what our customers are saying!";
    reviews.appendChild(paragraph);
    const form = document.createElement("form");
    form.classList.add("reviews-form");
    const fnameLabel = document.createElement("label");
    fnameLabel.textContent = "First Name:";
    const fnameInput = document.createElement("input");
    fnameInput.type = "text";
    fnameInput.classList.add("reviews-input");
    const lnameLabel = document.createElement("label");
    lnameLabel.textContent = "Last Name:";
    const lnameInput = document.createElement("input");
    lnameInput.type = "text";
    lnameInput.classList.add("reviews-input");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.classList.add("reviews-input");
    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");
    messageInput.classList.add("reviews-input");
    const submitButton = document.createElement("button");
    submitButton.textContent = "Send";
    form.appendChild(fnameLabel);
    form.appendChild(fnameInput);
    form.appendChild(lnameLabel);
    form.appendChild(lnameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);
    reviews.appendChild(form);

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Form submitted!");

        const newPerson = {
            id: people.length + 1,
            fname: fnameInput.value,
            lname: lnameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        people.push(newPerson);
    });

    people.forEach(element => {
        const review = document.createElement("div");
        review.classList.add("review-container");
        const reviewHeader = document.createElement("h2");
        reviewHeader.textContent = `${element.fname} ${element.lname}`;
        const reviewContent = document.createElement("p");
        reviewContent.textContent = `${element.message}`;
        review.appendChild(reviewHeader);
        review.appendChild(reviewContent);
        reviews.appendChild(review);
    });

    return reviews;
}
