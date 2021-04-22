// Sidenav
const sidenav = document.querySelector('.sidenav')
M.Sidenav.init(sidenav, {})

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {})

// Floating Contact Button

// ToolTip
const tooltip = document.querySelectorAll('.tooltipped')
M.Tooltip.init(tooltip, {})

// Image
const materialboxed = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialboxed, {})

// Tabs
const tabs = document.querySelectorAll('.tabs')
M.Tabs.init(tabs, {})

// Carousel
// const carousel = document.querySelectorAll('.carousel')
// M.Carousel.init(carousel, {
//     dist: -100,
//     numVisible: 3,
// })
const carousel = document.querySelectorAll('.carousel')
M.Carousel.init(carousel, {
    numVisible: 5,
    duration: 250,
    shift: 100,
    padding: 10,
    indicators: true
})

// Dropdown
const dropdown = document.querySelectorAll('.dropdown-trigger');
		M.Dropdown.init(dropdown, {
			hover: true,
			constrainWidth: false,
            coverTrigger: false,
        })

//   Modal
const modal = document.querySelectorAll('.modal');
M.Modal.init(modal, {})

// Contact Icon scroll top top 
const fab = document.querySelectorAll('.contact-btn')
M.FloatingActionButton.init(fab, {
    hoverEnabled: true,
    direction: 'top'
})


var instance = M.FloatingActionButton.getInstance(document.querySelector('.contact-btn'));

document.querySelector('.contact-btn').addEventListener('mouseover', () => {document.getElementById('scrolltotop').style.display = 'none'})
document.querySelector('.contact-btn').addEventListener('mouseleave', () => {
    if(window.scrollY >= 200){
        document.getElementById('scrolltotop').style.display = 'block'
    }
})

document.getElementById('scrolltotop').addEventListener('click', () => {
    window.scrollTo(0, 0);
})

document.addEventListener('scroll', () => {
    window.scrollY >= 200 ? document.getElementById('scrolltotop').style.display = 'block' : document.getElementById('scrolltotop').style.display = 'none'
})