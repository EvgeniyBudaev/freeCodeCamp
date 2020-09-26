(function() {
  'use strict'

  // функция-конструктор
  var Gallery = function(id, setup) {
    // настройки по-умолчанию
    this.defaults = {
      margin:			10,		// расстояние между элементами [px]
      visibleItems: 	1,		// сколько элементов показывать одновременно
      border:			0,		// толщина рамки изображения прописанная в CSS [px]
      responsive:		false,	// адаптивная галерея
      autoScroll:		false,	// автоматическое прокручивание
      interval: 		3000,	// задержка при автоматическом прокручивании [ms]
      nav:			true,	// показать/скрыть кнопки next/prev
      dots:			true,	// показать/скрыть постраничную навигацию
      keyControl:		false,	// управление клавишами вправо / влево
      baseTransition:	0.4,	// скорость анимации, при изменении CSS свойств [s]
      delayTimer:		250,	// время задержки при resize страницы [ms]
      limit:			30		// ограничиваем перемещение крайних элементов [px]
    };

    this.id = id;
    this.setup = setup;

    // основные DOM-элементы галереи определяющие её каркас
    // родительский элемент галереи
    this.gallery = document.getElementById(this.id);
    // контейнер в котором отображаются элементы галереи
    this.slider = this.gallery.querySelector('.slider');
    // контейнер, непосредственно в котором расположены элементы слайдера
    this.stage = this.gallery.querySelector('.stage');
    // элементы слайдера
    this.items = this.gallery.querySelectorAll('.stage > div');
    // количество элементов в слайдера
    this.count = this.items.length;

    // дополнительные свойства
    this.current = 0;		// index координаты текущего элемента
    this.next = 0;			// index координаты следующего элемента
    this.pressed = false;	// указывает, что совершилось событие 'mousedown'
    this.start = 0;			// координата, с которой начато перетаскивание
    this.shift = 0;			// на сколько был перемещён курсор относительно start

    // построение галереи исходя из полученных настроек
    this.init();
  };

  // запишем конструктор в свойство 'window.Gallery', чтобы обеспечить
  // доступ к нему снаружи анонимной функции
  window.Gallery = Gallery;

  // для сокращения записи, создадим переменную, которая будет ссылаться
  // на прототип 'Gallery'
  var fn = Gallery.prototype;
})()
