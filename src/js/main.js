// Отключить прокрутку яндекс карты руками
//отключаем зум колёсиком мышки

/* modal popup */
$(document).ready(function($) {
  $('.button').on('click', function() {
    $('.modal-answer').text($(this).attr('data-popup'));
    $('.modal').css("display", "flex").hide().fadeIn();
    return false;
  });	
	
  $('.modal-close').click(function() {
    $(this).parents('.modal').fadeOut();
    return false;
  });		
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').fadeOut();
    }
  });
	
  $('.modal').click(function(e) {
    if ($(e.target).closest('.modal-block').length == 0) {
      $(this).fadeOut();					
    }
  });
});