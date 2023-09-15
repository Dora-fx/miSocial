let activeBurger = null
burger.onclick = function(){
    activeBurger = "top"
    mainMenu.classList.toggle("top-menu-open")
    burger.classList.toggle("burger-open")
}
burgerBott.onclick = function(){
    activeBurger = "bott"
    mainMenu.classList.toggle("top-menu-open")
    mainMenu.classList.toggle("bott-open")
    burgerBott.classList.toggle("burger-open")
}
mainMenu.onclick = function(){
    mainMenu.classList.toggle("top-menu-open")
    if (activeBurger == "top") {
        burger.classList.toggle("burger-open")
    } else if (activeBurger == "bott") {
        mainMenu.classList.toggle("bott-open")
        burgerBott.classList.toggle("burger-open")
    }
}