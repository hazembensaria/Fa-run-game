import ChefElf from "./chefElf.js";
import ChefNain from "./chefNain.js";
import Elf from "./elf.js";
import Nain from "./nain.js";

 export default class Castle{
    constructor(image , guerrirUi , name){
        this.name = name
        this.image = image;
        this.resource = 4
        this.winingRounds = 0
        this.availableGuerrier = [new Elf(guerrirUi[0]) , new Nain(guerrirUi[1]) ,new ChefNain(guerrirUi[2]) ,new ChefElf(guerrirUi[3])];
        this.chosenGuerrier = []
        this.tmpChosenGuerrierList = []
    }

    clearChisenGeurrier() {
        this.chosenGuerrier= []
    }

    clameRewards(){
        
        this.resource +=1
        
    }
    
    winRound(name , toast , container){
        if(name=== "blue")
        toast.alertToastBlue(container , "we win this round !!" , "rightAlertToast" , "info")
    else
        toast.alertToast(container , "we win this round !!!" , "leftAlertToast" , "info")

        this.winingRounds+=1
    }
    confirmGuerrier(){
        this.chosenGuerrier.push(this.tmpChosenGuerrierList)
        this.tmpChosenGuerrierList =[]
    }

    decrimentResources(){
        this.resource -= this.tmpChosenGuerrierList[this.tmpChosenGuerrierList.length-1].resource
    }
    incrimentResources(resorces){
        this.resource+= resorces
    }
}
