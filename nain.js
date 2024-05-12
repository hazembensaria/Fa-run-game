export default class Nain{
    constructor(image){
        this.force = 10
        this.vie= 100
        this.name= "nain"
        this.image = image
        this.resource = 1
    }
    getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 3);
        return randomNumber + 1;
    }

    attack(){
        let damage =0
        for(let i  = 0  ; i<=this.force ; i++){
            damage += this.getRandomNumber()
        }
        console.log(damage)

        return damage ;
    }

    getDamage(damage){
        this.vie -= damage/2
        console.log(this.vie)
    }
    isKilled(){
        return this.vie <=0
    }
}