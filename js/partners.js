let partners = document.querySelectorAll('.partners__item-img');

let partnerWidthArr = [];

for (let j = 0; j < partners.length; j++) {
  let partner = partners[j];
  let partnerWidth = partner.clientWidth
  partnerWidthArr.push(partnerWidth)
}

let changeSize = () => {
  for (let i = 0; i < partners.length; i++) {
    let partner = partners[i];
    let screenWidth = window.screen.width;

    if (screenWidth < 1200 && screenWidth > 700) {
      partner.style.width = `${partnerWidthArr[i] * 0.5}px`
    } else if (screenWidth < 700) {
      partner.style.width = `${partnerWidthArr[i] * 0.33}px`
    } else {
      partner.style.width = `${partnerWidthArr[i] * 1}px`
    }
  }
}

window.addEventListener('load', changeSize);
window.addEventListener('resize', changeSize)