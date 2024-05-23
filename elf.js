import Guerrier from "./guerrier.js"

export default class Elf extends Guerrier{
    
    constructor(image){
        super(20 , "elf" , image , 2)

    }
   
    attack(){
     return super.attack()
    }
    getDamage(damage){
    super.getDamage(damage)
    }
    isKilled(){
    return super.isKilled() 
    }
}