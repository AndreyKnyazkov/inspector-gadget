// Отключить прокрутку яндекс карты руками
//отключаем зум колёсиком мышки



const menuBlockItem = document.querySelectorAll('.menu-block__item');
let dataHover = document.querySelectorAll('.data-hover');

menuBlockItem.forEach((elem, index, htmlelem) => {
  //Find out all childs of the element
  let allNodes = htmlelem[index].children,
  //convert to array
  arrNodes = Array.from(allNodes);
  //mouseenter
  elem.addEventListener('mouseenter', (e) => {
    //iterate through the array find out data-attr
    arrNodes.forEach((e, i, h) => {
    if (e.classList.contains('data-hover')) {
      //set new src
      e.setAttribute('src', e.dataset.hover);
      //change arrow to active
      //console.log(e.parentNode);
      //show elements of menu
      document.querySelectorAll('.menuitem-block').forEach((menu) => {
        //console.log(menu.getAttribute('data-link'));
        if (menu.getAttribute('data-link') === e.parentNode.getAttribute('href')) {
          menu.style.display = 'flex';
        }
      });
      //console.log(document.querySelectorAll('.menuitem-block'));
      Array.from(e.parentNode.children).forEach(el => {
        if (el.classList.contains('data-arrow')) {
          el.setAttribute('src', el.dataset.hover);
          el.classList.add('arrow-active');
        }
      });
    }
  });
  });
  //the same as was before but mouseleave
  elem.addEventListener('mouseleave', (e) => {
    arrNodes.forEach((e, i, h) => {
    if (e.classList.contains('data-hover')) {
      e.setAttribute('src', e.dataset.img);
      document.querySelectorAll('.menuitem-block').forEach((menu) => {
        //console.log(menu.getAttribute('data-link'));
        if (menu.getAttribute('data-link') === e.parentNode.getAttribute('href')) {
          menu.style.display = 'none';
        }
      });
      Array.from(e.parentNode.children).forEach(el => {
        if (el.classList.contains('data-arrow')) {
          el.setAttribute('src', el.dataset.img);
          el.classList.remove('arrow-active');
        }
      });
    }
  });
  });  
});

const menu = document.querySelector('.header-btn__burger-mobile'),
      menuSrcOpen = menu.dataset.open,
      menuSrcImg = menu.dataset.img,
      menuMobile = document.querySelector('.menu-mobile');

menu.addEventListener('click', (event) => {
  if (menuMobile.style.display === 'block') {
    menuMobile.setAttribute('style', 'display: none;');
    menu.setAttribute('src', menuSrcImg);
    document.querySelector('body').setAttribute('style', 'overflow: initial');
  } else {
    menuMobile.setAttribute('style', 'display: block;');
    menu.setAttribute('src', menuSrcOpen);
    window.scrollTo(0,0);
    menuMobile.scrollTo(0,0);
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
  }
});

window.addEventListener('resize', (event) => {
  if (window.screen.width >= 1050 && window.screen.height <= 768 ) {
  menuMobile.setAttribute('style', 'display: none');
  menu.setAttribute('src', menuSrcImg);
}
});