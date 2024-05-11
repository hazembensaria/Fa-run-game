import ChefElf from "./chefElf.js";
import ChefNain from "./chefNain.js";
import Elf from "./elf.js";
import Nain from "./nain.js";

 export default class Castle{
    constructor(image , guerrirUi , name){
        this.name = name
        this.image = image;
        this.resource = 3
        this.winingRounds = 0
        this.availableGuerrier = [new Elf(guerrirUi[0]) , new Nain(guerrirUi[1]) ,new ChefNain(guerrirUi[2]) ,new ChefElf(guerrirUi[3])];
        this.chosenGuerrier = []
    }
}
