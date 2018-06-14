const Adapter = {
    getBreed: function getBreed(breed) {
        let baseUrl = `https://dog.ceo/api/breed/${breed}/images`;
        return fetch(baseUrl).then(resp => console.log(resp.json()))

    }
}