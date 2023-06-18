const apiAllCat = 'https://api.thecatapi.com/v1/breeds';
const apiSearchCat = 'https://api.thecatapi.com/v1/images/search';

const API_KEY = 'live_TEVQVH8kIwhaeRhDOSyA8WnwNlykjxrHb3yygHQV8UxCfcTR5OszaMDhm7NejJnZ';

export function fetchBreeds() {
    return new Promise((resolve, reject) => {
        fetch(apiAllCat, {
            headers: {
                'x-api-key': API_KEY,
            }
        }).then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error' + response.status);
                }
                return response.json();
            })
            .then(data => {
                resolve(data.breeds);
            }).catch(error => {
        reject(error);
      });
});
};

export function fetchCatByBreed(breedId) {
    return new Promise((resolve, reject) => {
        fetch(apiSearchCat, {
            headers: {
                'x-api-key': API_KEY,
            }
        }).then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error' + response.status);
                }
                return response.json();
            })
            .then(data => {
                resolve(data[0]);
            }).catch(error => {
        reject(error);
      });
    })
}