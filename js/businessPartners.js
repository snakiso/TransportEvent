let openBtn = document.querySelectorAll('.business-partners__item-open');
let textBlock = document.querySelectorAll('.business-partners__item-text-block');

for (let i = 0; i < openBtn.length; i++) {
    let button = openBtn[i];
    let text = textBlock[i];

    button.addEventListener('click', () => {
        button.classList.toggle('active')

        if (button.classList.contains("active")) {
            text.style.webkitLineClamp = 'unset';
            button.textContent = 'скрыть';
        } else {
            text.style.webkitLineClamp = '3';
            button.textContent = 'подробнее'
        }
    })
}