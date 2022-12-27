import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  ulAdd: document.querySelector(".gallery"),
};

function createElementsGalery(galleryObj) {
  return galleryItems
    .map(({ preview, original, description } = 0) => {
      const element = `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
      return element;
    })
    .join("");
}

const stringElement = createElementsGalery(galleryItems);

refs.ulAdd.insertAdjacentHTML("afterbegin", stringElement);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
