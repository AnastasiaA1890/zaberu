const popupOne = document.querySelector('.popup');
const popupOneOpenButton = document.querySelector('.footer__link');
const popupOneCloseButton = document.querySelector('.popup__close-button');

function openPopupOne() {
    popupOne.classList.add('popup_opened');
}

function closePopupOne() {
    popupOne.classList.remove('popup_opened');
}

popupOneOpenButton.addEventListener('click', openPopupOne);
popupOneCloseButton.addEventListener('click', closePopupOne);
