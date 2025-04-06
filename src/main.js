import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-function.js';
import { handleError } from './js/handle-error.js';

let searchQuery = '';
let currentPage = 1;
let totalHits = 0;

const searchForm = document.getElementById('searchForm');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const gallery = document.getElementById('gallery');

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  searchQuery = document.getElementById('searchInput').value.trim();

  if (searchQuery === '') {
    return;
  }

  currentPage = 1;
  gallery.innerHTML = '';
  loadMoreBtn.style.display = 'none';

  try {
    const data = await fetchImages(searchQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      handleError('Sorry, there are no images matching your search query. Please try again!');
      return;
    }

    renderImages(data, { append: false });

    if (totalHits <= 15) {
      loadMoreBtn.style.display = 'none';
    }
    else if (currentPage * 15 < totalHits) {
      loadMoreBtn.style.display = 'block';
      loadMoreBtn.disabled = false;
      loadMoreBtn.textContent = "Load more...";
    } else {
      loadMoreBtn.style.display = 'block';
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = "We're sorry, but you've reached the end of search results.";
    }
  } catch (error) {
    console.error(error);
  }
}

async function onLoadMore() {
  currentPage += 1;

  try {
    const data = await fetchImages(searchQuery, currentPage);
    renderImages(data, { append: true });

    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const { height: cardHeight } = firstCard.getBoundingClientRect();
      const gap = 24;
      window.scrollBy({
        top: cardHeight * 2 + gap,
        behavior: 'smooth',
      });
    }

    if (currentPage * 15 >= totalHits) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = "We're sorry, but you've reached the end of search results.";
    }
  } catch (error) {
    console.error(error);
  }
}

