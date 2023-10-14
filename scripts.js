// JavaScript for Book Landing Page

// Example function for handling a click event
function handleButtonClick() {
    alert("You clicked the button! Feel free to explore more about the book.");
}

// Example function for displaying current date
function displayCurrentDate() {
    const currentDate = new Date();
    const dateElement = document.getElementById("current-date");
    dateElement.innerHTML = currentDate.toDateString();
}

// Example function for changing the book image on hover
function changeBookImage() {
    const bookImage = document.getElementById("book-image");
    bookImage.src = "new_book_image.jpg";
}

// Example event listeners
const button = document.getElementById("explore-button");
button.addEventListener("click", handleButtonClick);

const bookImage = document.getElementById("book-image");
bookImage.addEventListener("mouseover", changeBookImage);
bookImage.addEventListener("mouseout", function () {
    bookImage.src = "book_cover.jpg";
});

// Call the displayCurrentDate function
displayCurrentDate();