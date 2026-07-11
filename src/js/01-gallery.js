import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery'),
    modal: document.querySelector('#js-modal'),
    modalImg:document.querySelector('#modalImage'),
    closeModal:document.querySelector('#modalClose'),
}
refs.gallery.insertAdjacentHTML('afterbegin', createGalleryMarkUp(galleryItems));
refs.gallery.addEventListener('click', onImgClick);
refs.closeModal.addEventListener('click', onCloseModal);
document.addEventListener('keydown', onEscClick);
refs.modal.addEventListener('click', onBackdropClick);

function createGalleryMarkUp(galleryItems) {
    return galleryItems.map(function (galleryItem) {
     return `<li class="gallery__item">
 <a class="gallery__link" href=${galleryItem.original}>
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source=${galleryItem.original}
      alt=${galleryItem.description}
    />
  </a>
 </li>`  
   }).join('')
}

function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    refs.modal.classList.add('is-open');
    refs.modalImg.src = e.target.dataset.source;
    refs.modalImg.alt = e.target.alt;


}

function onCloseModal() {
    refs.modal.classList.remove('is-open');
   
}




function onEscClick(e) {
    if (e.code === 'Escape') {
        onCloseModal();
}
}

function onBackdropClick(e) {
    if (e.target===e.currentTarget) {
         onCloseModal();
   }
}