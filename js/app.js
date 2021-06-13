const modal = () => {
   const modalLinks = document.querySelectorAll('.modal-link');
   const body       = document.querySelector('body');
   const lockScroll = document.querySelectorAll('.fix-scroll');

   let unlock = true;

   const timeout = 800;

   if (modalLinks.length > 0) {
      for (let i = 0; i < modalLinks.length; i++) {
         const modalLink = modalLinks[i];
         modalLink.addEventListener('click', (e) => {
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            e.preventDefault();
         });
      }
   } 

   const modalCloseIcon = document.querySelectorAll('.close-modal');
   if (modalCloseIcon.length > 0) {
      for (let i = 0; i < modalCloseIcon.length; i++) {
         const el = modalCloseIcon[i];
         el.addEventListener('click', (e) => {
            modalClose(el.closest('.modal'));
            e.preventDefault();
         });
      }
   }

   const modalOpen = (currentModal) => {
      if (currentModal && unlock) {
         const modalActive = document.querySelector('.modal.open');
         if (modalActive) {
            modalClose(modalActive, false);
         } else {
            bodyLock();
         }
         currentModal.classList.add('open');
         currentModal.addEventListener('click', (e) => {
            if (!e.target.closest('.modal__content')) {
               modalClose(e.target.closest('.modal'));
            }
         });
      }
   };

   const modalClose = (modalActive, doUnlock = true) => {
      if (unlock) {
         modalActive.classList.remove('open');
         if (doUnlock) {
            bodyUnlock();
         }
      }
   };

   const bodyLock = () => {
      const lockScrollValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockScroll.length > 0) {
         for (let i = 0; i < lockScroll.length; i++) {
            const el = lockScroll[i];
            el.style.paddingRight = lockScrollValue;
         }
      }
      body.style.paddingRight = lockScrollValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(() => {
         unlock = true;
      }, timeout);
   };

   const bodyUnlock = () => {
      setTimeout(() => {
         if (lockScroll.length > 0) {
            for (let i = 0; i < lockScroll.length; i++) {
               const el = lockScroll[i];
               el.style.paddingRight = '0px';
            }
         }
         body.style.paddingRight = '0px';
         body.classList.remove('lock');
      }, timeout);

      unlock = false;
      setTimeout(() => {
         unlock = true;
      }, timeout);
   };

   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         const modalActive = document.querySelector('.modal.open');
         modalClose(modalActive);
      }
   });
};

modal();