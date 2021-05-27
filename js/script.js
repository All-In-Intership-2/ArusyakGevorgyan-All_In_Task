window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navList = document.querySelector('#nav-list');

    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('menu_active');
    })
});



var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
  });


 
  