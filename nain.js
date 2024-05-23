import Guerrier from "./guerrier.js";

export default class Nain extends Guerrier{
    constructor(image){
        
        super(10 , "nain" , image , 1)

    }
    
    attack(){
        return super.attack()
       }
       getDamage(damage){
       super.getDamage(damage/2)
       }
       isKilled(){
       return super.isKilled() 
       }
}