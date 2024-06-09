const openers = document.querySelectorAll('[data-popup]');
// if (openers.length === 0) return;

openers.forEach((item) => {
   const popupValue = item.dataset.popup;
   const popupItem = document.querySelector(`#${popupValue}`);
   const close = popupItem.querySelector('.close');
   item.addEventListener('click', () => {
      popupItem.classList.add('active');
      close.addEventListener('click', () => {
         popupItem.classList.remove('active');
      });
   });
   document.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
         popupItem.classList.remove('active');
      }
   });
});
