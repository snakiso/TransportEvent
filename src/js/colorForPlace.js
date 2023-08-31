let places = document.querySelectorAll('.programm__item-place');
let cardTitle = document.querySelectorAll('.registration__card-title');

window.addEventListener('load', () => {
  if (places) {
    for (let i = 0; i < places.length; i++) {
      let place = places[i]

      place.style.color = place.dataset.color
    }
  }
  if(cardTitle){
    for (let i = 0; i < cardTitle.length; i++) {
      let card = cardTitle[i]

      card.style.color = card.dataset.color
    }
  }
})