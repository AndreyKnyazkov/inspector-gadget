
var accItem = document.getElementsByClassName('defect-tabs__block');
var accHD = document.getElementsByClassName('defect-tabs__title');
var popupName = ('.popup-answer');
var link = ('.button');

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'defect-tabs__block close';
  }
  if (itemClass == 'defect-tabs__block close') {
    this.parentNode.className = 'defect-tabs__block open';
  }
}

const tabs = (elemToClick, elemTitle, elemDspr) => {

  //
  const accItem = document.querySelectorAll(elemToClick);
  //Элемент на который при клике открывается таб
  const accHD = document.querySelectorAll(elemTitle);
  //То что должно раскрываться
  const tabsJsSubtitle = document.querySelectorAll(elemDspr);
  console.log(accHD);

  // Скрываю все табы с описанием
  document.querySelectorAll('.tab-js-subtitle').forEach(elem => {
    elem.style.display = 'none';
    elem.style.transform = 'transform: scaleY(1)';
  });

    //выдает класс кликнутого элемента

      accItem.forEach((elem, i) => {
        elem.addEventListener('click', event => {


        console.log(tabsJsSubtitle[i]);
        tabsJsSubtitle[i].style.display = 'block';


        // let itemClass = this.parentNode.className;

        // accHD[i].parentNode.className = 'questions-answer close';

        // if (itemClass == 'questions-answer close') {
        //   //добавляет тому на который кликнул
        //   this.parentNode.className = 'questions-answer open';
        // }
      });
    });
    

    
    
};

//tabs('.tab-js-elem', '.tab-js-title', '.tab-js-subtitle');

// var accItem = document.getElementsByClassName('questions-answer');
// var accHD = document.getElementsByClassName('questions-answer__title');
// var popupName = ('.popup-answer');
// var link = ('.button');

// for (let i = 0; i < accHD.length; i++) {
//     accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//     var itemClass = this.parentNode.className;
//     for (i = 0; i < accItem.length; i++) {
//         accItem[i].className = 'questions-answer close';
//     }
//     if (itemClass == 'questions-answer close') {
//         this.parentNode.className = 'questions-answer open';
//     }
// }




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