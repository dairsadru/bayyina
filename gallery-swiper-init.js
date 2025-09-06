// Swiper.js подключение и инициализация для галереи-карусели
// https://swiperjs.com/

document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.gallery-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 }
        },
        a11y: true,
        watchSlidesProgress: true,
        watchOverflow: true,
    });
});
