import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector(".gallery");
const bodyEl = document.querySelector("body");

const elementGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= ${description}
    />
  </a>
  </div>`;
  })
  .join("");

divGalleryEl.innerHTML = elementGalleryItem;

divGalleryEl.addEventListener("click", onOpenModalOriginImage);

function onOpenModalOriginImage(e) {
  e.preventDefault();

  const instance = basicLightbox.create(
    `
  	<img
        src= ${e.target.dataset.source}
        alt= ${e.target.alt}
      />
  `
  );

  instance.show(() => {
    bodyEl.style.overflowY = "hidden";
    divGalleryEl.addEventListener("keydown", onCloseModalEsc, { once: true });
    document
      .querySelector(".basicLightbox")
      .addEventListener("click", onCloseModalEsc);
  });

  function onCloseModalEsc(e) {
    if (e.code === "Escape" || e.type === "click") {
      instance.close(() => {
        bodyEl.style.overflowY = "visible";
      });
    }
  }
}
