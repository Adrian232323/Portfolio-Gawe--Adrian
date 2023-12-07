const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')
const openNav = document.querySelector('.burger-btn-box')
const closeNav = document.querySelector('.fa-xmarkl')
const closeBoxNav = document.querySelector('.close-box')
const closeX = document.querySelector('.hide-navigation')

const btn =document.querySelector('.scroll-to-top')  
let root = document.documentElement;

const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')
const closeCookie = document.querySelector('.close-door')


const footerYear = document.querySelector('.footer-year')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

const closeAlertCookie = () => {
    cookieBox.classList.add('hide')
  
}




 

const handleNAv = () => {
    nav.classList.toggle('nav-active')
    openNav.classList.toggle('hide-nav')
    closeNav.classList.toggle('hide-navigation')
  
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        closeX.classList.add('hide-navigation') 
      
     
       
        )

        item.addEventListener('click', () =>
    
        nav.classList.remove('nav-active')
      
     
       
        )

        item.addEventListener('click', () =>
    
        openNav.classList.remove('hide-nav')
      
     
       
        )

       
    
      
       
        
    })
   
  
  
    handleNavItemsAnimation();
   
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}



const handleScrollBar = () => {
	const scroll = window.scrollY

	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
	// console.log(`wysokość strony ${document.body.getBoundingClientRect().height}`);
	// console.log(`wysokość viewportu ${window.innerHeight}`);
	// console.log(leftToScroll);

	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
	

	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

	if(scrollBarWidth > 80) {
		btn.classList.add('active-scroll-to-top')
	} else {
		btn.classList.remove('active-scroll-to-top')
	}
}

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	})
}



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();



closeCookie.addEventListener('click', closeAlertCookie)

cookieBtn.addEventListener('click', handleCookieBox)

showCookie()

navBTN.addEventListener('click', handleNAv)
window.addEventListener('scroll', handleScrollBar)
btn.addEventListener('click', scrollToTop)



