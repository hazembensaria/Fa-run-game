export default class BuildUi{



    shrinkCastleInfo(castleInfo){
        castleInfo.classList.remove("shrinkInfoBlue")
        castleInfo.classList.add("strechInfoBlue")
    }

    /**
     * 
     * @param {blueGuerrierList} guerrierList 
     * @param {blueCastleInfo} castleInfo 
     * @param {blueCastle} castle 
     */

     drowInfoInterface(guerrierList , castleInfo , castle , className , callBack){
        
     
        var guerrierInfo = document.createElement('div');
        guerrierInfo.style.width ="100%"
        guerrierInfo.style.height ="60%"
        guerrierInfo.style.display ="flex"
        guerrierInfo.style.alignItems = "start"
        guerrierInfo.style.paddingTop = "1rem"
        guerrierInfo.style.borderBottom = "lightgray 1px solid"
        guerrierInfo.style.gap = "space-event"
        guerrierInfo.style.justifyContent = "center"
        guerrierInfo.style.overflow = "hidden"
    
    
    
        castleInfo.appendChild(guerrierInfo)
        // --------------------------------------
    
        guerrierList = document.createElement('div');
        guerrierList.style.width= "100%"
        guerrierList.style.height= "20%"
        guerrierList.style.display ="flex"
        guerrierList.style.position ="relative"
        guerrierList.style.overflow = "hidden"
    
        var playButton = document.createElement('div');
        playButton.style.width= "18%"
        playButton.style.height= "50%"
        playButton.style.alignSelf= "center"
        playButton.style.position= "absolute"
        playButton.style.left= "80%"
        playButton.style.backgroundColor= "blue"
        playButton.style.borderRadius= "5px"    
        playButton.style.textAlign= "center"
        playButton.style.color= "white"
        
    
        playButton.textContent ="go fight"
        guerrierList.appendChild(playButton)
    
        guerrierList.style.alignItems = "start"
    
        castleInfo.appendChild(guerrierList)
        console.log(castleInfo)

        console.log(guerrierList)   
        // -----------------------------
        this.showGuerrier(castle , guerrierInfo , className)
        callBack(guerrierList , playButton)
    }  
    
     createImg(src , element , canTrain){
        var img = document.createElement('img');
        img.src = src
        canTrain ? img.classList.add("guerrierIconValid") : img.classList.add("guerrierIconInvalid")
        img.alt = 'image'
        
        element.appendChild(img);
        }

         createDiv(text , element){ 
            const node = document.createTextNode(text);
        var div = document.createElement('div');
        div.appendChild(node)
        // div.style.backgroundColor = "red"
        element.appendChild(div);
        return div
        }



     showGuerrier(castle , info , className ){
        castle.availableGuerrier.map(guerrier =>{
            var div1 = document.createElement('div');
            div1.classList.add(className)
            div1.style.display = "flex"
            div1.style.alignItems = "center"
            div1.style.flexDirection = "column"
            div1.style.gap = ".5rem"
            div1.style.height = "60px"
            div1.style.width = "100%"
            this.createImg(guerrier.image , div1 , castle.resource >= guerrier.resource)
            this.createDiv(guerrier.name , div1)
            this.createDiv(`${guerrier.resource} coins` , div1)
    
            info.appendChild(div1)
    
            // redGuerrirList = document.createElement('div');
            // redCastleInfo.appendChild(redGuerrirList)
    
        })
    }




     UpdateGuerrierIuicons(castle , className , id){
        const bg = document.getElementsByClassName(className)
        for(let i = 0 ; i<bg.length ; i++){
            // console.log(bg[i])c
            var img = bg[i].children[0]
            let cost = parseInt(bg[i].children[2].textContent[0])
            if(castle.resource < cost){
               img.classList.remove('guerrierIconValid')
               img.classList.add('guerrierIconInvalid')
           }else{
            img.classList.add('guerrierIconValid')
            img.classList.remove('guerrierIconInvalid')
           }
        }
     const text = document.getElementById(id)
     text.textContent = `resorces: ${castle.resource} wining rounds : ${castle.winingRounds}`
    }
     
}