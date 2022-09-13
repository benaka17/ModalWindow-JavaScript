'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Method for the open
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
  
//Method for the close
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
  
//Add Listeners to all the modals
for (let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}
  
//Exit on "X" button
btnCloseModal.addEventListener('click', closeModal);

//Exit on click away
overlay.addEventListener('click', closeModal);
  
//Exit on esc
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});
  