let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');

document.getElementById('transition').addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
});

document.getElementById('close-popup-img').addEventListener("click",  () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});