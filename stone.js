export default class Stone{
    constructor(image){
        this.image = image
    }

    buildUi(container , top , left){
    const stoneImage = document.createElement('img');
   stoneImage.src = this.image ;
   stoneImage.classList.add("stone")
   stoneImage.style.top = top
   stoneImage.style.left = left
   container.appendChild(stoneImage)
    }
}