import { renderImages, renderNoResults, clearGallery } from "./render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const baseUrl = `https://pixabay.com/api/`;
const apiKey = `50314234-ba813915cbcdccb3e2319b70f`;

const searchForm = document.getElementById("searchForm");
const gallery = document.querySelector(".gallery");


const loader = document.getElementById('loader');
function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  clearGallery();

  const searchWord = document.getElementById("searchInput").value.trim();

    showLoader();
    
    if (!searchWord) {
        hideLoader();
    
    return;
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: searchWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

  const url = `${baseUrl}?${params.toString()}`;
   
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        if (data.hits.length === 0) {
          renderNoResults();
        } else {
          renderImages(data.hits);
        }
        hideLoader();
      }, 1000);
    })
    .catch(error => {
      iziToast.error({
        title: "Hata",
        message: "API isteğinde hata oluştu.",
        position: "topRight",
      });
      console.error("Fetch error:", error);
      hideLoader();
    });
});
