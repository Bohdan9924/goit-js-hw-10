import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

import Notiflix from 'notiflix';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

function showLoad() {
  loaderEl.classList.add('active');
}

function hideLoad() {
  loaderEl.classList.remove('active');
}

function showError() {
  errorEl.classList.add('active');
}

function hideError() {
  errorEl.classList.remove('active');
}

fetchBreeds()
.then(data => {
      const optionMarkup = data
        .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
        .join('');
      selectEl.insertAdjacentHTML('afterbegin', optionMarkup);
    })
    .catch(error => {
      showError();
      Notiflix.Notify.warning(error);
    })
    .finally(() => {
      hideLoad();
    });

    selectEl.addEventListener('change', event => {
  hideError();

  catInfoEl.innerHTML = '';
  const selectedCat = event.target.value;

  showLoad();

  fetchCatByBreed(selectedCat)
    .then(data => {
      const catInfoMarkup = data.map(element => `
        <img class="cat-img" src="${element.url}" alt="${element.breeds[0].name}">
        <div>
          <h2>${element.breeds[0].name}</h2>
          <p>${element.breeds[0].description}</p>
          <p><span class="cat-temperament">Temperament: </span>${element.breeds[0].temperament}</p>
        </div>
      `).join('');

      catInfoEl.insertAdjacentHTML('afterbegin', catInfoMarkup);
    })
    .catch(error => {
      showError();
      Notiflix.Notify.warning(error);
    })
    .finally(() => {
      hideLoad();
    });
});



