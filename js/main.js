const menubtn = document.querySelector('.menu-btn')
const logo = document.querySelector('.logo')
const cotainer_nav = document.querySelector('.cotainer_nav')
const nav = document.querySelector('nav')

let menuActive = false

window.addEventListener('resize', () => {
    if(screen.width > 1000 ){
        logo.textContent = 'CarlosReyes!'
        nav.style.visibility = 'visible'
        cotainer_nav.style.height = 'auto'
        menubtn.style.visibility = 'hidden'
    }
    else{
        logo.textContent = 'CR!'
        nav.style.visibility = 'hidden'
        cotainer_nav.style.height = '80px'
        menubtn.style.visibility = 'visible'
        menubtn.innerHTML = '<i class="fas fa-align-justify">'
    }

})

menubtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(menuActive === true){
        logo.textContent = 'CR!'
        nav.style.visibility = 'hidden'
        cotainer_nav.style.height = '80px'
        menubtn.innerHTML = '<i class="fas fa-align-justify">'
        menuActive = false
    }
    else{
        logo.textContent = 'CarlosReyes!'
        nav.style.visibility = 'visible'
        menubtn.innerHTML = '<i class="fas fa-times-circle"></i>'
        cotainer_nav.style.height = 'auto'
        menuActive = true
    }
})