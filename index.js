$(document).ready(function () {
    fixedHeader()
    $(window).scroll(function () {
        fixedHeader()
    });
    function fixedHeader() {
        if (window.pageYOffset > 0) {
            $(".header").addClass("fixed")
        } else {
            $(".header").removeClass("fixed")
        }
    }
    $(".burger, .overlay, .header__menu a").click(function () {
        toggleMenu()
    });
    function toggleMenu() {
        if ($(window).width() < 1024) {
            $(".header").toggleClass("active")
            $("body").toggleClass("menu-is-opened")
        }
    }
});

function func(str, a, b) {
    if (str === 'sum') {
        return a + b
    } else if (str === multiply) {
        return a * b
    } else{
        return 'Такої опеації не існує'
    }
}

console.log(func("sum", 4, 5))
 