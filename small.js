console.log("Welcome to Our Website !!");

let header = document.querySelector(".header");
let menu = document.querySelector(".menu");
let menuClose = document.querySelector(".menu-close");
let navLinks = document.querySelector(".nav-links")

menu.addEventListener('click', function () {
    navLinks.style.right = "0";
})
menuClose.addEventListener('click', function () {
    navLinks.style.right = "-50%";
})

function contactScroll() {
    let sw = screen.width;
    if (sw < 700) {
        window.scrollTo(0, 5650);
    }
    else {
        window.scrollTo(0, 3000);
    }
}



try {
    let chat = document.getElementById('chat');
    chat.addEventListener('click', function () {
        window.scrollTo(0, 5000)
    })
}
catch (e) {
}




let nav = document.getElementById('nav');

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    if (scroll > 100) {
        nav.style.backgroundColor = "#00000059"
    }
    else{
        nav.style.backgroundColor = "transparent"
    }
});