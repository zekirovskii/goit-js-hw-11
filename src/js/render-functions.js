import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";

let lightbox = null;

export function renderImages(images) {
  const gallery = document.querySelector(".gallery");
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a class="gallery-item" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>
    `
    )
    .join("");

  gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
}

export function renderNoResults() {
  clearGallery();

  iziToast.error({
    message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
    
  });
}
