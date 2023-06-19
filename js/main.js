$('.owl-carousel').owlCarousel({
    margin:30,
    loop:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

const navEL = document.querySelector ('.navbar')

window.addEventListener ('scroll', () => {
    if (window.scrollY >= 56) {
        navEL.classList.add('customNav')
    } else if (window.scrollY < 56) {
        navEL.classList.remove('customNav')
    }
})