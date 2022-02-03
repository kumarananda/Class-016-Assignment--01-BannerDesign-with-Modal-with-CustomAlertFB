
// get elements
const applyBtn = document.getElementById('applyButton');
const modal = document.querySelector('.saha-modal');
const modalClose = document.querySelector('.modal-header .close');

const sahaCustomAlert = document.querySelector('.saha-customAlertBox')
const alertClose = document.querySelector('.alertHeader .close');
const keepE = document.querySelector('#keepE');
const discard = document.querySelector('#discard');


applyBtn.addEventListener('click', function (e) {
    // modal.style.opacity = 1;
    // modal.style.pointerEvents = 'painted';
    // modal.style.transform = 'translateY(0)';
    modal.classList.add('activeClass');
    
});
modalClose.addEventListener('click', function (e) {
    sahaCustomAlert.classList.add('activeclear');

});

// "e.target == this" define only affected on this element , 
// parent element will not tergate
modal.addEventListener('click', function (e) {
    if(e.target == this){
        modal.classList.remove('activeClass');
    }
    
});
alertClose.addEventListener('click', function (e) {
    // sahaCustomAlert.style.display = 'none';
    sahaCustomAlert.classList.remove('activeclear');
});
keepE.addEventListener('click', function (e) {
    // sahaCustomAlert.style.display = 'none';
    sahaCustomAlert.classList.remove('activeclear');
});
discard.addEventListener('click', function () {
    sahaCustomAlert.classList.remove('activeclear');
    modal.classList.remove('activeClass');
});

