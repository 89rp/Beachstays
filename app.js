//storing the hamburger button and nav element in a variable
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navList");

// add the event listener to the hamburger button
hamburger.addEventListener("click", slideInMenu);

// update hamburger button class to have postion change to appear on screen
function slideInMenu () {
    hamburger.classList.toggle("active")
    navList.classList.toggle("active");
}