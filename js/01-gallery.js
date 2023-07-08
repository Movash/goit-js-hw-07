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
        data-source="${image.original}"
        alt="${image.description}"
        />
    </a>
    </li>`;
}).join("");

allGallery.insertAdjacentHTML("beforeend", imagesListArr);

allGallery.addEventListener("click", onClick);

function onClick(evt) {
evt.preventDefault();
if (!evt.target.nodeName === "IMG") {
    return;
}
const selectedImg = evt.target.dataset.source;

const instance = basicLightbox.create(`<img src="${selectedImg}" alt="">`, {
onShow: (instance) => {
    window.addEventListener("keydown", closeWithEsc);
},
onClose: (instance) => {
    window.removeEventListener("keydown", closeWithEsc);
},
});
instance.show();

function closeWithEsc(evt) {
if(evt.code === "Escape") {
    instance.close();
}
}
}