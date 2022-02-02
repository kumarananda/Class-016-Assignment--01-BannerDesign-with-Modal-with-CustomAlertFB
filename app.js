
const applyBtn = document.getElementById('applyButton');
const modal = document.querySelector('.saha-modal');
const modalClose = document.getElementById('modalClose');


applyBtn.addEventListener('click', function (e) {
    // modal.style.opacity = 1;
    // modal.style.pointerEvents = 'painted';
    // modal.style.transform = 'translateY(0)';
    modal.classList.add('activeClass');


    
});
modalClose.addEventListener('click', function (e) {
    // modal.style.opacity = 0;
    // modal.style.pointerEvents = 'none';
    // modal.style.transform = 'translateY(-100px)';
    modal.classList.remove('activeClass');

});

// "e.target == this" define only affected on this element , 
// parent element will not tergate
modal.addEventListener('click', function (e) {
    if(e.target == this){
        modal.classList.remove('activeClass');
    }
})