export default class Elf{
    constructor(image){
        this.force =20
        this.vie = 100
        this.name= "elf"
        this.image = image
        this.resource = 2
    }
    getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 3);
        return randomNumber + 1;
    }

    attack(){
        var damage =0
        for(let i  = 0  ; i<=this.force ; i++){
            damage += this.getRandomNumber()
        }
        console.log(damage)

        return damage ;
    }
    getDamage(damage){
        this.vie -= damage
        console.log(this.vie)
    }
    isKilled(){
        return this.vie <=0
    }
}