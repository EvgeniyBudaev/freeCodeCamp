import createElement from './create-element.js';

export default class RibbonMenu {
    constructor(categories) {
        this.categories = categories;
        this.render();
        this.category = 0;
        this.addEventListeners();
        this.iteratorMenu()
    }

    render() {
  this.elem = createElement(`
  <!--Корневой элемент RibbonMenu-->
  <div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="../../../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner"></nav>

    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="../../../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
        `)

        let categories = this.categories.map(item => createElement(`
    <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
`))

        this.sub('inner').append(...categories);

        // const itemStatusAll = document.querySelector('[data-id=""]')
        // console.log('itemStatusAll', itemStatusAll)
        // if (itemStatusAll) {
        //     itemStatusAll.classList.add('ribbon__item_active')
        // }
    }

    sub(ref) {
        return this.elem.querySelector(`.ribbon__${ref}`);
    }

    iteratorMenu() {
        const items = document.querySelectorAll('.ribbon__item')
        console.log('items ', items)
        items.forEach(item => item )
    }

    addEventListeners() {
        this.elem.onclick = ({target}) => {
            const ribbonInner = document.querySelector('.ribbon__inner')
            console.log('res', ribbonInner)
            let button = target.closest('.ribbon__arrow');
            // if (button) {
            //
            //     let id = target.closest('[data-id]').dataset.id;
            //     console.log('res', id)
            //     this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
            //         detail: id,
            //         bubbles: true
            //     }));
            // }

            if (target.closest('.ribbon__arrow_right')) {
                this.next(ribbonInner);
            }

            if (target.closest('.ribbon__arrow_left')) {
                this.prev(ribbonInner);
            }
        };
    }

    next(ribbonInner) {
        ribbonInner.scrollBy(350, 0);
        this.category ++;
        this.update(ribbonInner);
    }

    prev(ribbonInner) {
        ribbonInner.scrollBy(-350, 0);
        this.category --;
        this.update(ribbonInner);
    }

    update(ribbonInner) {
        let scrollLeft = ribbonInner.scrollLeft;
        console.log('scrollLeft', scrollLeft);

        let scrollWidth = ribbonInner.scrollWidth;
        scrollLeft = ribbonInner.scrollLeft;
        let clientWidth = ribbonInner.clientWidth;

        let scrollRight = scrollWidth - scrollLeft - clientWidth;
        console.log('scrollRight', scrollRight);
    }


}
