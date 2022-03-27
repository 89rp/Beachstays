//storing the hamburger button and nav element in a variable
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navList");

// Storing fucntion in vareiableupdate hamburger button and nav class to add .active which will activate postion change for nav to move on screen
const slideInMenu = function () {
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
}

// add the event listener to the hamburger button
hamburger.addEventListener("click", slideInMenu)


//storing each link within the nav in a variable.
const menuLink = document.querySelectorAll(".menuLink");

// Storing fucntion in vareiable to update hamburger button and nav class to remove .active which will activate postion change for nav to move off screen.
const closeMenu = function() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}

// forEach loop that adds eventlistener for when a link in the nav is clicked to call the callback function closeMenu 
menuLink.forEach(link => link.addEventListener("click", closeMenu));



