document.getElementById('burgertoggle').addEventListener("click", function(){
  this.classList.toggle('open');
  document.body.classList.toggle('overflow');
  let nav=document.querySelector('nav');
  nav.style.display = nav.style.display == "block" ? "none" : "block";
});

//https://swiperjs.com/
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  // cssMode:true,
  direction: 'horizontal',
  preloadImages: true,
  autoHeight:true,
  lazy:true,
  loop: true,
  keyboard:false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
    // type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

//http://sachinchoolur.github.io/lightGallery/
lightGallery(document.getElementById('lightgallery1'),{
  thumbnail:true,
  selector: '.swiper-slide',
  download:false
}); 
lightGallery(document.getElementById('lightgallery2'),{
  thumbnail:true,
  selector: '.swiper-slide',
  download:false
}); 
lightGallery(document.getElementById('lightgallery3'),{
  thumbnail:true,
  selector: '.swiper-slide',
  download:false
}); 
lightGallery(document.getElementById('lightgallery4'),{
  thumbnail:true,
  selector: '.swiper-slide',
  download:false
}); 