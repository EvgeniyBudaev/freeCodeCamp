function initCarousel() {
  // ваш код...
  const carouselSlideAll = document.querySelectorAll('.carousel__slide')
  const carouselArrowRight = document.querySelector('.carousel__arrow_right')
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left')
  const carouselSlide = document.querySelector('.carousel__slide')
  const carouselInner = document.querySelector('.carousel__inner')

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
    console.log('total', total)
    console.log('counter', counter)
    console.log('slideWidth', slideWidth)
  })

  carouselArrowLeft.addEventListener('click', function () {
    counter-= 1
    total -= slideWidth
    if(counter < amountSliders) {
      carouselInner.style.transform = `translateX(-${total}px)`
      carouselArrowRight.style.display = ''
    } if (counter < 1) {
      total += slideWidth
    }  if (counter === 1) {

      carouselArrowLeft.style.display = 'none'
    }
    console.log('total', total)
    console.log('counter', counter)
    console.log('slideWidth', slideWidth)
  })

}

