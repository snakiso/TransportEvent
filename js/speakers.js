let cardsBox = document.querySelector('.speakers__cards');
let photoArr = [];
let nameArr = [];
let positionArr = [];


let create = () => {
  for (let i = 0; i < photoArr.length; i++) {
    let photo = photoArr[i];
    let name = nameArr[i];
    let position = positionArr[i];


    let card = document.createElement('div'); //создание карточки
    card.className = 'speakers__card';

    let cardInner = document.createElement('div'); //создание внутреннего контейнера
    cardInner.className = 'speakers__card-inner';

    let cardImg = document.createElement('img'); //создание фотографии
    cardImg.classList = 'speakers__card-img';
    cardImg.src = `${photo}`;

    let cardContent = document.createElement('div'); //Контейнер для имени и должности
    cardContent.classList = 'speakers__card-content';

    let cardName = document.createElement('span'); //создание имени
    cardName.classList = "speakers__card-name";
    cardName.innerHTML = `${name}`;

    let cardPosition = document.createElement('span'); // создание должности 
    cardPosition.classList = "speakers__card-position";
    cardPosition.innerHTML = `${position}`;

    cardContent.appendChild(cardName);
    cardContent.appendChild(cardPosition);

    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardContent);

    card.appendChild(cardInner);

    cardsBox.appendChild(card)
  }
}


window.addEventListener('load', async function () {
  let url = './files/speakers.json'
  let response = await fetch(url)
  let json = await response.json();
  json.forEach(elem => {

    photoArr.push(elem.photo);
    positionArr.push(elem.description);
    nameArr.push(elem.name)
  })

  create()
})