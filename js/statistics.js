let image = document.querySelector('.statistics__img');

window.addEventListener('load', () => {
  let windowWidth = window.screen.width
  if (windowWidth < 1200 && windowWidth > 700) {
    image.src = './img/statistics/statistics-tablet.svg'
  } else if (windowWidth < 700) {
    image.src = './img/statistics/statistics-mobile.svg'
  } else {
    image.src = './img/statistics/statistics-desk.svg'
  }
})

window.addEventListener('resize', () => {
  let windowWidth = window.screen.width
  if (windowWidth < 1200 && windowWidth > 700) {
    image.src = './img/statistics/statistics-tablet.svg'
  } else if (windowWidth < 700) {
    image.src = './img/statistics/statistics-mobile.svg'
  } else {
    image.src = './img/statistics/statistics-desk.svg'
  }
})