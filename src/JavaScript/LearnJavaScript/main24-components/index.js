import createElement from '../../../../assets/lib/create-element.js';

export default class Modal {
    constructor() {
        this.options = {
            title: '',
            body: null
        }


        this.$container = document.querySelector('.container');
        this.$body = document.querySelector('body');
    }


    toHTML(options) {
        const {title} = options
        return `
          <!--Корневой элемент Modal-->
  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="../../../../assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          ${title}
        </h3>
      </div>

      <div class="modal__body"></div>
    </div>

  </div>
        `
    }


    render(options) {
        this.$container.insertAdjacentHTML('afterbegin', this.toHTML(options))
    }



    open() {
        this.render(this.options);
        this.$body.classList.add('is-modal-open')
        const modalBody = document.querySelector('.modal__body')
        modalBody.insertAdjacentElement('beforeend', this.options.body)
    }

    setTitle(value) {
        return this.options.title = value;
    }

    setBody(value) {
        return this.options.body = value;
    }

}
