import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchInput');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
    event.preventDefault();
  
    const query = input.value.trim();
    if (!query) return;
  
    loader.classList.remove('hidden');
    gallery.innerHTML = '';
  
    fetchImages(query)
      .then(response => {
        const images = response.data.hits;
  
        if (images.length === 0) {
          iziToast.info({
            title: 'No Results',
            message: 'Sorry, there are no images matching your search query. Please try again!',
          });
          loader.classList.add('hidden');
          return;
        }
  
        setTimeout(() => {
          renderGallery(images);
          loader.classList.add('hidden');
        }, 1000);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        iziToast.error({
          title: 'Error',
          message: 'An error occurred while fetching data.',
        });
        loader.classList.add('hidden'); 
      });
  });