document.addEventListener('DOMContentLoaded', function() {
    renderDropdown()
    document.querySelector('#breed-list').onchange=breedSelectionHandler;
},false)

const dogPic = document.querySelector('#dog-pic')
const breedList = document.querySelector('#breed-list')
const morePics = document.querySelector('#more-pics')

function renderDropdown() {
    Adapter.getBreeds().then(data => {
        
        Object.keys(data.message).forEach(breed => {
            breedList.innerHTML += `<option value="${breed}">${breed}</option>`
        })
    })
}

function breedSelectionHandler(e) {
    breedList.dataset.dogBreed = e.target.value
    Adapter.getAllBreedImg(e.target.value).then(data => {
        dogPic.src = data.message[Math.floor(Math.random() * data.message.length)]
    })
}

morePics.addEventListener('click', () => {
    Adapter.getAllBreedImg(breedList.dataset.dogBreed).then(data => {
        dogPic.src = data.message[Math.floor(Math.random() * data.message.length)]
    })
})