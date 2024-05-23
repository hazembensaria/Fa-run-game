export default class Guerrier{
     VIE = 100;
     BASEFORCE = 10
     BASERESOURCE = 1
    constructor( force  , name , image , resource) {
        this.force = force
        this.vie = this.VIE
        this.name= name
        this.image = image
        this.resource = resource
        
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
        if(this.vie>damage)
        this.vie -= damage
    else
        this.vie = 0
        console.log(this.vie)
    }

    isKilled(){
        return this.vie <=0
    }
}