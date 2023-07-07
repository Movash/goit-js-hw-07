import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const allGallery = document.querySelector(".gallery");

const imagesListArr = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        alt="${image.description}"
        />
    </a>
    </li>`;
  })
  .join("");

allGallery.insertAdjacentHTML("beforeend", imagesListArr);

allGallery.addEventListener("click", baseSettings);

function baseSettings(evt) {
  evt.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});