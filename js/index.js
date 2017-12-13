$(document).ready(() => {
  $('.home').on('mouseenter', event => {
    $('.texthome').animate({top: '100%'}, 300)
    $('.fa-home').animate({opacity: '1.0', top: '75%'}, 400);
  }).on('mouseleave', event => {
    $('.texthome').animate({top: '0%'}, 400)
    $('.fa-home').animate({opacity: '.0', top: '0%'}, 300);
  })
  
  
  
  
});