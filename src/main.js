$(document).ready(function () {
    $('.open-mobile-menu').click(function (event) {
        $('.open-mobile-menu, .mobile-menu').addClass('is-open')
   
    })
     $('.mobile-menu-clear-button').click(function (event) {
         $('.mobile-menu-clear-button, .mobile-menu').toggleClass('is-open')
   
    })
}
)