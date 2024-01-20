//  ***************  SMOOTH SCROLL ****************** //
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });

/*   MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}

/* REMOVE MENU MOBILE  */

const navlink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = documnet.getElementById('nav-menu')
    navMenu.ClassList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linkAction))

/* SCROLL SECTION ACTIVE LINK */
const section = document.querySelectionAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scroll <= sectionTop + sectionHeight){
            document.querySelection('.nav_menu a[HREF*=' + section +"]").classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId+']'.classList.remove('active-link'))
        }
    } )
}
window.addEventListener('scroll',scrollActive)

//   CHANGE BACKGROUND HEADER    // 

function scrollHeader(){
    const nav = document.getElementById('header')
    // when the scroll is greater than 200 viewpoint height, add the scroll-header class to the head tag //
    if(this.scrollY >= 80) nav.classList.add('scroll-Header'); else nav.classList.remove(scroll-header)
}
window.addEventListener('scroll',scrollHeader)


//                         SHOW SCROLL UP               //
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is highter than 560 viewpoint height, add the show-scroll class to the header tagw
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)



//              Previously selected topic(if user selected)                //


// DARK LIGHT THEME =================================================== /

// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark'? 'add' :'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'uil-moon'? 'add' :'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     documnet.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })