//storing the hamburger button and nav element in a variable
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navList");

// update hamburger button class to have postion change to appear on screen

const slideInMenu = function () {
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
}

// add the event listener to the hamburger button
hamburger.addEventListener("click", slideInMenu)
