const mobileMenuToggle= document.querySelector("#hamburger-menu")
const menuLinks = document.querySelector(".nav-menu")



const toggleMenu = () => {
    mobileMenuToggle.classList.toggle("change");
    menuLinks.classList.toggle("change");
}