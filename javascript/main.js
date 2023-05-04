const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

// Funtions for Responsive Navigation in Mobile View to toggle
// the Hamburger Menu
function toggleNavActive() {
    navBar.classList.toggle("active");
    console.log(navLinks)
    console.log(navLinks1)
}
hamburger.addEventListener('click', function(){
    toggleNavActive()
})