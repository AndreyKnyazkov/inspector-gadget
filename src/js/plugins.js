const tabs = (mainBlock, titleTab, cssMain, numberOfOpenTab) => {
  //Главный блок с табом
  const tabJsСssMain = document.querySelectorAll(cssMain),
    //Заголовок таба
    tabJsTitle = document.querySelectorAll(titleTab);

  //Добавляю ко всем элементом класс закрытия
  const closeTabs = () => {
    //закрываю все табы
    tabJsСssMain.forEach((elem) => {
      elem.classList.add('close');
    });
    // Если нужно, добавляю элемент раскрытого таба
    if (numberOfOpenTab) {
      tabJsСssMain[numberOfOpenTab].classList.remove('close');
      tabJsСssMain[numberOfOpenTab].classList.add('open');
    }    
  };
  // mainBlock, titleTab, cssMain
  closeTabs();

  tabJsTitle.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      const itemClass = elem.parentNode.className;
      for (i = 0; i < tabJsСssMain.length; i++) {
        tabJsСssMain[i].className = `${cssMain} ${mainBlock} close`.replace(/\./gi, '');
      }
      if (itemClass == `${cssMain} ${mainBlock} close`.replace(/\./gi, '')) {
        elem.parentNode.className = `${cssMain} ${mainBlock} open`.replace(/\./gi, '');
      }
    });
  });
};
//tabs
tabs('.js-tab-main-block', '.tab-js-title', '.defect-tabs__block', 1);
//menu
tabs('.js-tab-main-block', '.tab-js-title', '.menu-mobile-block__item');

/*
var div = document.querySelector("#too"); //Это элемент от которого мы начнем поиск

div.closest("#block"); //Результат - самый первый блок древа выше
console.log('div.closest("#block"): ', div.closest("#block"));
div.closest("div"); //Сам блок #too и будет результатом, так как он подходит под селектор "div"
console.log('div.closest("div"): ', div.closest("div"));
div.closest("a"); //null - В предках #too нет ни одного тега "a"!
console.log('div.closest("a"): ', div.closest("a"));
div.closest("div[title]") //#block - так как ближе нет блоков с атрибутом title.
console.log('div.closest("div[title]"): ', div.closest("div[title]"));
*/
// console.log(document.querySelectorAll('.data-hover')[2]);
