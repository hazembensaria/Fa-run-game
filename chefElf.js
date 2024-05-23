import Guerrier from "./guerrier.js";

export default class ChefElf extends Guerrier{
    constructor(image){
   
        super(40 , "chefElf" , image , 4)

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