$(document).ready(() => {
  $('.home').on('mouseenter', event => {
    $('.texthome').animate({top: '100%'}, 100)
    $('.fa-home').animate({opacity: '1.0', top: '-50%'}, 300);
  }).on('mouseleave', event => {
    $('.texthome').animate({top: '0%'}, 400)
    $('.fa-home').animate({opacity: '.0', top: '-500%'}, 300);
  })
  
  $('.aboutUs').on('mouseenter', event => {
    $('.textaboutus').animate({top: '100%', 'border-bottom': 'solid 2vw $cloud'}, 100)
    $('.fa-info-circle').animate({opacity: '1.0', top: '-120%',color:'#fff'}, 300);
  }).on('mouseleave', event => {
    $('.textaboutus').animate({top: '0%'}, 400)
    $('.fa-info-circle').animate({opacity: '.0', top: '-500%'}, 300);
  })
  
  $('.work').on('mouseenter', event => {
    $('.worktext').animate({top: '100%'}, 100)
    $('.fa-folder-open-o').animate({opacity: '1.0', top: '-50%'}, 300);
  }).on('mouseleave', event => {
    $('.worktext').animate({top: '0%'}, 400)
    $('.fa-folder-open-o').animate({opacity: '.0', top: '-500%'}, 300);
  })
  
  $('.contact').on('mouseenter', event => {
    $('.contacttext').animate({top: '100%'}, 100)
    $('.fa-paper-plane-o').animate({opacity: '1.0', top: '-150%', left: '76.2%'}, 300);
  }).on('mouseleave', event => {
    $('.contacttext').animate({top: '0%'}, 400)
    $('.fa-paper-plane-o').animate({opacity: '.0', top: '-500%', left: '78%'}, 300);
  })
  
  
  
  
});