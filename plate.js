export default class Plate{
    uiPlate ;

    constructor(){
    this.blueGuerrierFighters = []
    this.redGuerrierFighters = []    
    }

    
    setUiPlate(uiPlate){
        this.uiPlate = uiPlate ;
    }
    drowFighters(fightersList , color , width , height , top , left){
        this.uiPlate.style.filter = `drop-shadow(4px 7px 4px ${color})`
        this.uiPlate.firstChild.style.top = top
        this.uiPlate.firstChild.style.left = left
        for(let i =0 ; i< fightersList.length ; i++){
            var img = document.createElement('div');
            // this.uiPlate.firstChild.style.border = "1px black solid"
            img.style.width = width
            img.style.height = height
            img.style.zIndex = "999"
            // img.style.position = "absolute"
            img.style.backgroundImage = `url(${fightersList[i].image})`
            img.style.backgroundSize = "100% 100%"
            // img.style.transform = "scale(0)"
            img.classList.add("popUp")

        this.uiPlate.firstChild.appendChild(img)
        }
    }
    eraiseFighters(){
        while (this.uiPlate.firstChild) {
            this.uiPlate.removeChild(this.uiPlate.firstChild);
        }
        this.uiPlate.style.filter = ``
        this.uiPlate.style.zIndex = '98'

        
    }
}