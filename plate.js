export default class Plate{
    uiPlate ;

    constructor(){
    this.blueGuerrierFighters = []
    this.redGuerrierFighters = []    
    }

    
    setUiPlate(uiPlate){
        this.uiPlate = uiPlate ;
    }
    drowFighters(fightersList , color , width , height){
        this.uiPlate.style.filter = `drop-shadow(4px 7px 4px ${color})`
        for(let i =0 ; i< fightersList.length ; i++){
            var img = document.createElement('div');
            // img.style.border = "1px black solid"
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
}