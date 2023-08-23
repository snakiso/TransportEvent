let newsBox = document.querySelector('.news__block');
let photoArr = [];
let dateArr = [];
let titleArr = [];
let textArr = [];
let linkArr = [];


let create = () => {
  for (let i = 0; i < photoArr.length; i++) {
    let photo = photoArr[i];
    let date = dateArr[i];
    let title = titleArr[i];
    let text = textArr[i];
    let link = linkArr[i];


    let news = document.createElement('div'); //создание новости
    news.className = 'news__item';

    let newsInner = document.createElement('div'); //создание внутреннего контейнера
    newsInner.className = 'news__item-inner';

    let newsImg = document.createElement('img'); //создание фотографии
    newsImg.classList = 'news__item-img';
    newsImg.src = `${photo}`;

    let newsContent = document.createElement('div'); //Контейнер для даты, тайтла, текста...
    newsContent.classList = 'news__item-content';

    let newsDate = document.createElement('span'); //Cоздание даты
    newsDate.classList = "news__item-date";
    newsDate.innerHTML = `${date}`

    let newsTitle = document.createElement('p'); //создание тайтла
    newsTitle.classList = "news__item-title";
    newsTitle.innerHTML = `${title}`;

    let newsText = document.createElement('p'); // создание текста
    newsText.classList = "news__item-text";
    newsText.innerHTML = `${text}`;

    let newsLink = document.createElement('a'); // Создание ссылки
    newsLink.innerHTML = 'читать';
    newsLink.className = 'news__item-link';
    newsLink.href = `${link}`

    newsContent.appendChild(newsDate);
    newsContent.appendChild(newsTitle);
    newsContent.appendChild(newsText);
    newsContent.appendChild(newsLink);

    newsInner.appendChild(newsImg);
    newsInner.appendChild(newsContent);

    news.appendChild(newsInner);

    newsBox.appendChild(news);

  }
}


window.addEventListener('load', async function () {
  let url = './files/news.json'
  let response = await fetch(url)
  let json = await response.json();
  json.forEach(elem => {

    photoArr.push(elem.photo);
    dateArr.push(elem.date)
    textArr.push(elem.description);
    titleArr.push(elem.title);
    linkArr.push(elem.link);
  })

  create()
})