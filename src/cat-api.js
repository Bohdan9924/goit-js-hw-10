// const apiAllCat = 'https://api.thecatapi.com/v1/breeds';
// const apiSearchCat = 'https://api.thecatapi.com/v1/images/search';

// const API_KEY = 'live_TEVQVH8kIwhaeRhDOSyA8WnwNlykjxrHb3yygHQV8UxCfcTR5OszaMDhm7NejJnZ';

// export function fetchBreeds() {
//     return new Promise((resolve, reject) => {
//         fetch(apiAllCat, {
//             headers: {
//                 'x-api-key': API_KEY,
//             }
//         }).then(response => {
//                 if (!response.ok) {
//                     throw new Error('HTTP error' + response.status);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data.breeds);
//             }).catch(error => {
//         reject(error);
//       });
// });
// };

// export function fetchCatByBreed(breedId) {
//     return new Promise((resolve, reject) => {
//         fetch(apiSearchCat, {
//             headers: {
//                 'x-api-key': API_KEY,
//             }
//         }).then(response => {
//                 if (!response.ok) {
//                     throw new Error('HTTP error' + response.status);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data[0]);
//             }).catch(error => {
//         reject(error);
//       });
//     })
// }

const apiFull = 'https://api.thecatapi.com/v1/breeds';
const apiSearch = 'https://api.thecatapi.com/v1/images/search';
const API_KEY =
  'live_J1c3ReKXpbII84HmPX4RyPejOXkcqD0fyEejmLwc7SlwdX9GizKFc0O7vazMR0yY';

  export function fetchBreeds() {
  return fetch(apiFull, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.warn(error);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${apiSearch}?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.warn(error);
    });
}