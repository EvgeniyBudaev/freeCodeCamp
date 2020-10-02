<<<<<<< HEAD
import createElement from '../../../../assets/lib/create-element.js';
=======
>>>>>>> 9db15be2b521a72584fe1c8c3b81b08823b317fa
export default class Carousel {

    constructor(slides) {
<<<<<<< HEAD
      this.slides = slides;
  
      this.currentSlideNumber = 0;
      this.render();
      this.addEventListeners();
    }
  
    render() {
      this.elem = createElement(`
          <div class="carousel">
            <div class="carousel__arrow carousel__arrow_right">
              <img src="../../../../assets/images/icons/angle-icon.svg" alt="icon" />
            </div>
            <div class="carousel__arrow carousel__arrow_left">
              <img src="../../../../assets/images/icons/angle-left-icon.svg" alt="icon" />
            </div>
            <div class="carousel__inner"></div>
          </div>
          `);
  
      let slides = this.slides.map(item => createElement(`
        <div class="carousel__slide" data-id="${item.id}">
          <img
            src="../../../../assets/images/carousel/${item.image}"
            class="carousel__img"
            alt="slide"
          />
          <div class="carousel__caption">
            <span class="carousel__price">€${item.price.toFixed(2)}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="../../../../assets/images/icons/plus-icon.svg" alt="icon" />
            </button>
          </div>
        </div>`));
  
      this.sub('inner').append(...slides);
  
      this.update();
    }
  
    addEventListeners() {
      this.elem.onclick = ({target}) => {
        let button = target.closest('.carousel__button');
        if (button) {
          let id = target.closest('[data-id]').dataset.id;
  
          this.elem.dispatchEvent(new CustomEvent('product-add', {
            detail: id,
            bubbles: true
          }));
        }
  
        if (target.closest('.carousel__arrow_right')) {
          this.next();
        }
  
        if (target.closest('.carousel__arrow_left')) {
          this.prev();
        }
      };
    }
  
    sub(ref) {
      return this.elem.querySelector(`.carousel__${ref}`);
    }
  
    next() {
      this.currentSlideNumber++;
      this.update();
    }
  
    prev() {
      this.currentSlideNumber--;
      this.update();
    }
  
    update() {
      let offset = -this.elem.offsetWidth * this.currentSlideNumber;
      this.sub('inner').style.transform = `translateX(${offset}px)`;
  
      if (this.currentSlideNumber == this.slides.length - 1) {
        this.sub('arrow_right').style.display = 'none';
      } else {
        this.sub('arrow_right').style.display = '';
      }
  
      if (this.currentSlideNumber == 0) {
        this.sub('arrow_left').style.display = 'none';
      } else {
        this.sub('arrow_left').style.display = '';
      }
    }
  
  }
=======
        this.slides = slides;
        this.elem = this.init();
        this.control();
    }


    init() {
        const carousel = document.createElement('div')
        carousel.className = 'carousel'
        carousel.insertAdjacentHTML('beforeend', this.toHTML(this.slides))
        return carousel
    }



    toHTML(slides) {
        return `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="../../../../assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="../../../../assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
        ${this.iteratorSlides(slides)}
        `
    }


    iteratorSlides(slides) {
       return slides.map(slide => this.slide(slide))
    }


    slide({image, price, name}){
        return `
        <div class="carousel__slide" data-id="red-curry-veggies">
          <img src="../../../../assets/images/carousel/${image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${price}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="../../../../assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
        `
    }


    control() {
        document.addEventListener('DOMContentLoaded', () => {
            const carouselSlideAll = document.querySelectorAll('.carousel__slide')
            const carouselArrowRight = document.querySelector('.carousel__arrow_right')
            const carouselArrowLeft = document.querySelector('.carousel__arrow_left')
            const carouselSlide = document.querySelector('.carousel__slide')
            const carouselInner = document.querySelector('.carousel__inner')
console.log('carouselSlide', carouselSlide)
            let total = 0
            let counter = 1
            const amountSliders = Array.from(carouselSlideAll).length
            const slideWidth = carouselSlide.offsetWidth

            if (counter === 1) {
                carouselArrowLeft.style.display = 'none'
            }

            carouselArrowRight.addEventListener('click', function () {
                carouselArrowLeft.style.display = ''
                counter+= 1
                total += slideWidth
                if(counter < amountSliders) {
                    carouselInner.style.transform = `translateX(-${total}px)`
                    carouselArrowRight.style.display = ''
                } else if (counter > amountSliders) {
                    total -= slideWidth
                } else if (counter === amountSliders) {
                    carouselInner.style.transform = `translateX(-${total}px)`
                    carouselArrowRight.style.display = 'none'
                }
            })

            carouselArrowLeft.addEventListener('click', function () {
                counter-= 1
                total -= slideWidth
                if(counter < amountSliders) {
                    carouselInner.style.transform = `translateX(-${total}px)`
                    carouselArrowRight.style.display = ''
                } if (counter < 1) {
                    total += slideWidth
                } if (counter === 1) {

                    carouselArrowLeft.style.display = 'none'
                }
            })
        })
    }


}
>>>>>>> 9db15be2b521a72584fe1c8c3b81b08823b317fa
