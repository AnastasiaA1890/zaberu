//Terms variables
const popupTerms = document.querySelector('#terms');
const termsPopupOpenButton = document.querySelector('.footer__link-terms');
const termsCloseButton = document.querySelector('#terms .popup__close-button')
//Offer variables
const popupOffer = document.querySelector('#offer');
const offerPopupOpenButton = document.querySelector('.footer__link-offer');
const offerCloseButton = document.querySelector('#offer .popup__close-button')
//License variables
const popupLicense = document.querySelector('#license');
const licensePopupOpenButton = document.querySelector('.footer__link-license')
const licenseCloseButton = document.querySelector('#license .popup__close-button')

//OpenPopup function
function openPopup(element) {
    element.classList.add('popup_opened');
    element.addEventListener('click', closePopupOverlay);
}
//ClosePopup function
function closePopup(element) {
    element.classList.remove('popup_opened');
    element.removeEventListener('click', closePopupOverlay);
}

function closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

//Event handlers
//Open event handlers
termsPopupOpenButton.addEventListener('click', () => openPopup(popupTerms));
offerPopupOpenButton.addEventListener('click', () => openPopup(popupOffer));
licensePopupOpenButton.addEventListener('click', () => openPopup(popupLicense));
//Close event handlers
termsCloseButton.addEventListener('click', () => closePopup(popupTerms));
offerCloseButton.addEventListener('click', () => closePopup(popupOffer));
licenseCloseButton.addEventListener('click', () => closePopup(popupLicense));

