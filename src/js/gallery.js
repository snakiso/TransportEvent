let galleryContainer = document.querySelector('.gallery__container_desktop');
let galleryBtns = galleryContainer.querySelectorAll('.gallery__column-header');
let galleryLists = galleryContainer.querySelectorAll('.gallery__column');
let galleryVideos = galleryContainer.querySelectorAll('.gallery__video-box');

const hiddenColumns = () => {
    galleryLists.forEach(g => g.style.display = "none")
}

const removeClass = () => {
    galleryBtns.forEach (b => b.classList.remove('active'))
}

for (let i = 0; i < galleryBtns.length; i++) {
    let galleryBtn = galleryBtns[i];
    let galleryList = galleryLists[i];
    let galleryVideo = galleryVideos[i];

    galleryBtn.addEventListener('click', () => {
        removeClass()
        galleryBtn.classList.add('active')
        hiddenColumns();
        galleryList.style.display = 'grid';
        galleryList.style.flexBasis = '100%';
        galleryList.style.gap = '64px';
        galleryList.style.gridTemplateColumns = "repeat(3, 1fr)";
        if(galleryVideo){
            galleryVideo.style.width = "100%";
            galleryVideo.style.display = 'contents';
        }
    })
}