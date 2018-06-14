const Adapter = {
    getAllBreedImg: function getAllBreedImg(breed) {
        let baseUrl = `https://dog.ceo/api/breed/${breed}/images`;
        return fetch(baseUrl).then(resp => resp.json())
    },

    getBreeds: function getBreeds() {
        let baseUrl = 'https://dog.ceo/api/breeds/list/all'
        return fetch(baseUrl).then(resp => resp.json())
    }
}