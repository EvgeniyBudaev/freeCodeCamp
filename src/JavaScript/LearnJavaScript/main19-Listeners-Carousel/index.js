function initCarousel() {
  // ваш код...
  const carouselSlideAll = document.querySelectorAll('.carousel__slide')
  let total = 0
  const amountSliders  = Array.from(carouselSlideAll).length

  for (let i = 0; i<amountSliders; i++) {
    total = total + carouselSlideAll[i].offsetWidth
    moveSlide(total)
  }

  const sumWidthSliders = Array.from(carouselSlideAll).map(el => (
    total = total + el.offsetWidth
  ))


}

function moveSlide(carouselSlideWidth) {
  const carouselInner = document.querySelector('.carousel__inner')
  // const carouselSlide = document.querySelector('.carousel__slide')
  // const carouselSlideWidth = carouselSlide.offsetWidth
  // carouselInner.style.transform = `translateX(-${carouselSlideWidth}px)`

  const carouselArrowRight = document.querySelector('.carousel__arrow_right')
  carouselArrowRight.addEventListener('click', () => {
    carouselInner.style.transform = `translateX(-${carouselSlideWidth}px)`
  })
}
