console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded: Sequence Activated");

    //Images
    let imageContainer = document.querySelector('#dog-image-container');
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response1) => {
        return response1.json()
    })
    .then((data1) => {
        data1['message'].forEach((element) => {
            let newElement = document.createElement('img')
            newElement.src = element
            imageContainer.appendChild(newElement)
        })
    })

    //Breed List & Color Changer
    let breedContainer = document.querySelector('#dog-breeds');
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response2) => {
        return response2.json()
    })
    .then((data2) => {
        let breeds = data2.message
        for (let breed in breeds) {
            let breedList = document.createElement('li')
            breedList.style.display = 'none'
            breedList.id = 'breed-object'
            breedList.addEventListener('click', (element) => {
                breedList.style.color = 'red'
            })
            breedList.innerText = breed
            breedContainer.appendChild(breedList)
        }
    }) 
})

