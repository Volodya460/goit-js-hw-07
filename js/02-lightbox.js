import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
const gallery = creatGallary(galleryItems);
// console.log(gallery);

galleryBox.innerHTML = gallery;

function creatGallary(event) {
  return event
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  // captionSelector: "img",
  // captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
