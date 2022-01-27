/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')
// Popup
const btnOpenVideo = document.querySelectorAll('.islands__video-content')
const popupVideo = document.getElementById('popup')

function popup() { 
    popupVideo.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', popup))

const btnCloseVideo = document.getElementById('popup-close')
btnCloseVideo.addEventListener('click', () => { 
    popupVideo.classList.remove('show-popup')
}) 

// Swiper JS
let  galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
  });
let galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  loop: true, 
  thumbs: {
    swiper: galleryThumbs
  }
});