import galleryItems from "./data/gallery-data.js";

const refs = {
  galleryListEl: document.querySelector(".js-gallery"),
  modalEl: document.querySelector(".js-lightbox"),
  modalCloseBtn: document.querySelector("[data-action = close-lightbox]"),
  imageOriginalEl: document.querySelector(".lightbox__image"),
  overlayEl: document.querySelector(".lightbox__overlay"),
};

const rendersGalleryMarkup = () => {
  const arrOfStr = galleryItems.map(({ preview, original, description }) => {
    return `<li class = gallery__item><a class = gallery__link><img class = gallery__image src = '${preview}' data-source = '${original}' alt = '${description}'></a>    </li>`;
  });

  const str = arrOfStr.join("");

  refs.galleryListEl.insertAdjacentHTML("afterbegin", str);
};

const onImageClick = function (e) {
  refs.modalEl.classList.add("is-open");
  refs.imageOriginalEl.src = e.target.dataset.source;
  refs.imageOriginalEl.alt = e.target.alt;
};

const onModalBtnClick = function () {
  refs.modalEl.classList.remove("is-open");

  refs.imageOriginalEl.src = "";
};

const onEscPress = (e) => {
  if (e.key === "Escape") {
    onModalBtnClick();
  }
};

refs.galleryListEl.addEventListener("click", onImageClick);
refs.modalCloseBtn.addEventListener("click", onModalBtnClick);
refs.overlayEl.addEventListener("click", onModalBtnClick);
window.addEventListener("keydown", onEscPress);

rendersGalleryMarkup();
