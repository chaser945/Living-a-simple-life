const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const bars = document.querySelectorAll('.bar')
const mobileNavLinks = document.querySelectorAll('.mobile-nav-li')

hamburger.addEventListener('click', function () {

    console.log(mobileNavLinks)
    if (!mobileNav.classList.contains('is-active')) {
        mobileNav.classList.add('is-active')
    } else {
        mobileNav.classList.remove('is-active')
    }

    for (let i = 0; i < bars.length; i++) {


        if (!bars[i].classList.contains('is-active')) {
            bars[i].classList.add('is-active')
        }
        else {
            bars[i].classList.remove('is-active')
        }
    }

    // mobileNavLinks.forEach((link) => {
    //     link.addEventListener('click', function () {
    //         mobileNav.classList.remove('is-active')
    //         bars.forEach((bar) => {
    //             bar.classList.remove('is-active')
    //         })
    //     })
    // })


})
