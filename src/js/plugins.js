const tabs = (mainBlock, titleTab, cssMain) => {
  //Главный блок с табом
  const tabJsMainBlock = document.querySelectorAll(mainBlock),
    //Заголовок таба
    tabJsTitle = document.querySelectorAll(titleTab);

  //Добавляю ко всем элементом класс закрытия
  const closeTabs = () => {
    //закрываю все табы
    tabJsMainBlock.forEach((elem) => {
      elem.classList.add('close');
    });
    // Если нужно, добавляю элемент раскрытого таба
    tabJsMainBlock[1].classList.remove('close');
    tabJsMainBlock[1].classList.add('open');
  };
  // mainBlock, titleTab, cssMain
  closeTabs();

  tabJsTitle.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      const itemClass = elem.parentNode.className;
      for (i = 0; i < tabJsMainBlock.length; i++) {
        console.log(tabJsMainBlock.toString);
        tabJsMainBlock[i].className = `${cssMain} ${mainBlock} close`.replace(/\./gi, '');
      }
      if (itemClass == `${cssMain} ${mainBlock} close`.replace(/\./gi, '')) {
        elem.parentNode.className = `${cssMain} ${mainBlock} open`.replace(/\./gi, '');
      }
    });
  });
};
tabs('.js-tab-main-block', '.tab-js-title', 'defect-tabs__block');