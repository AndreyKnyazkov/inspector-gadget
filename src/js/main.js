
//Сначала по классу должен идти главный блок, заложенный в верстке, потом исполнительный класс скрипта, потом уже говорится закрыт он или нет
//Пример: defect-tabs__block js-tab-main-block open
//css код для скрипта: 
/*
.open .tab-js-subtitle {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transform-origin: top;
  transform-origin: top;
  -webkit-transition: -webkit-transform .4s ease;
  transition: -webkit-transform .4s ease;
  transition: transform .4s ease;
  transition: transform .4s ease, -webkit-transform .4s ease;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.close .tab-js-subtitle {
  height: 0;
  -webkit-transition: height 1s ease-out;
  transition: height 1s ease-out;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
}
*/

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