let image = document.querySelector('.main-event__numbers');

window.addEventListener('load', () => {
  let windowWidth = window.screen.width
  if (windowWidth < 1200 && windowWidth > 700) {
    image.src = './img/main-event/main-event-tablet.svg'
  } else if (windowWidth < 700) {
    image.src = './img/main-event/main-event-mobile.svg'
  } else {
    image.src = './img/main-event/main-event-desk.svg'
  }
})

window.addEventListener('resize', () => {
  let windowWidth = window.screen.width
  if (windowWidth < 1200 && windowWidth > 700) {
    image.src = './img/main-event/main-event-tablet.png'
  } else if (windowWidth < 700) {
    image.src = './img/main-event/main-event-mobile.png'
  } else {
    image.src = './img/main-event/main-event-desk.png'
  }
})