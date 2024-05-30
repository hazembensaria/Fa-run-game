export default class Plate{
    uiPlate ;

    constructor(){
    this.blueGuerrierFighters = []
    this.redGuerrierFighters = []    
    }

    
    setUiPlate(uiPlate){
        this.uiPlate = uiPlate ;
    }
    drowFighters(fightersList , color , width , height , top , left , teamPosition , name){
        this.uiPlate.style.filter = `drop-shadow(4px 7px 4px ${color})`
        this.uiPlate.style.zIndex = `999`
        this.uiPlate.firstChild.style.top = top
        this.uiPlate.firstChild.style.left = left
        for(let i =0 ; i< fightersList.length ; i++){
            var health  = (fightersList[i].vie*40)/100
            var img = document.createElement('div');
            // this.uiPlate.firstChild.style.border = "1px black solid"
            img.style.width = width
            img.style.height = height
            img.style.zIndex = "999"
            img.style.position = "relative"
            img.style.filter = `drop-shadow(4px 7px 4px ${color})`
            img.style.backgroundImage = `url(${fightersList[i].image})`
            img.style.backgroundSize = "100% 100%"
            color ==="red" ? img.style.order = `${i+1}` : img.style.order = "0"
            // img.style.transform = "scale(0)"
            img.classList.add("popUp")

            var healthBar = document.createElement('div');
            var actuelHealth = document.createElement('div');

            healthBar.style.position = "absolute"
            healthBar.style.top = "-1rem"
            healthBar.style.width = "40px"
            healthBar.style.height = "12px"
            healthBar.style.backgroundColor = "white"
            healthBar.style.border = "1px white solid"
            healthBar.style.borderRadius = "3px"

            healthBar.appendChild(actuelHealth)
            actuelHealth.style.backgroundColor = "green"
            actuelHealth.style.transform = "all 5s easy-in"

            actuelHealth.style.width = `${health}px`
            actuelHealth.style.height = "100%"
            actuelHealth.style.borderRadius = "3px"
   




            img.appendChild(healthBar)
            console.log(this.redGuerrierFighters )
            if(teamPosition !== 0 && name ==="blue"){
            this.uiPlate.firstChild.insertBefore(img , this.uiPlate.firstChild.firstChild)
                }
            else{
            this.uiPlate.firstChild.appendChild(img)}
        }

    }
    updateHealthBar(health , attackingTeam){
        var current = (health*40)/100
        attackingTeam === "blue"? 
        (this.uiPlate.firstChild.children[this.blueGuerrierFighters.length].firstChild.firstChild.style.width = `${current}px` 
        , console.log(...this.uiPlate.firstChild.children , this.blueGuerrierFighters.length)):
        (this.uiPlate.firstChild.children[this.blueGuerrierFighters.length-1].firstChild.firstChild.style.width = `${current}px`
            ,console.log(...this.uiPlate.firstChild.children , this.redGuerrierFighters.length)
        )
        console.log("health updated")

    }


    eraiseKilledFighter(attackingTeam){
        attackingTeam === "blue"? 
        this.uiPlate.firstChild.removeChild(this.uiPlate.firstChild.children[this.blueGuerrierFighters.length]):
        this.uiPlate.firstChild.removeChild(this.uiPlate.firstChild.children[this.blueGuerrierFighters.length-1])
        
    }
    eraiseFighters(){
        while (this.uiPlate.firstChild.firstChild) {
            this.uiPlate.firstChild.removeChild(this.uiPlate.firstChild.firstChild);
        }
        this.uiPlate.style.filter = ``
        this.uiPlate.style.zIndex = '98'
    }
}