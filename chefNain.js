import Guerrier from "./guerrier.js";

export default class ChefNain extends Guerrier{
    constructor(image){
        super(10 , "chefNain" , image , 3)
       
    }
   

    


    attack(){
        return super.attack()
       }
       getDamage(damage){
       super.getDamage(damage/4)
       }
       isKilled(){
       return super.isKilled() 
       }
}