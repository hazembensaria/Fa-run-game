
export default class BuildUi{



    shrinkCastleInfo(castle , castleInfo){
        if(castle.name==="blue")
        {castleInfo.classList.remove("shrinkInfoBlue")
        castleInfo.classList.add("strechInfoBlue")}
        else
         {castleInfo.classList.remove("shrinkInfoRed")
        castleInfo.classList.add("strechInfoRed")}
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
        guerrierInfo.style.zIndex = "9999999"

        guerrierInfo.style.overflow = "hidden"

          
            var cancelRed = document.createElement('div')
      
            cancelRed.classList.add("cancelInfoButton")
            cancelRed.textContent = "X"
            castleInfo.appendChild(cancelRed)

    
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
        playButton.classList.add("playButton")
    
        playButton.textContent ="go fight"
        guerrierList.appendChild(playButton)
    
        guerrierList.style.alignItems = "start"
    
        castleInfo.appendChild(guerrierList)
        console.log(castleInfo)

        console.log(guerrierList)   
        // -----------------------------
        this.showGuerrier(castle , guerrierInfo , className)
        callBack(guerrierList , playButton , cancelRed)
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
     


     attachGuerrirToUilist(castle ,list , callBack){
            var img2 = document.createElement('img')
            var len = castle.tmpChosenGuerrierList.length-1
            img2.src=castle.tmpChosenGuerrierList[len].image
            img2.style.width= "50px"
            img2.style.height= "65px"
            img2.classList.add(`chosenGuerrier${castle.name}`)
            img2.setAttribute("number" ,len)
            img2.setAttribute("cost" ,castle.tmpChosenGuerrierList[len].resource)
            console.log(list)
            list.appendChild(img2)
            callBack(img2)
        // })
        }


        buildInfoSection(blueCastle , redCastle , blueCastleInfo , redCastleInfo , container  , redPlayer , bluePlayer ,  callBack){
            var img = document.createElement('img');
            var img1 = document.createElement('img');
        
            var redName = document.createElement("div")
            var blueName = document.createElement("div")
            redName.textContent = redPlayer.name
            blueName.textContent = bluePlayer.name
            var redFrame = document.createElement("img")
            var blueFrame = document.createElement("img")
            var blueImg = document.createElement("img")
            var redImg = document.createElement("img")
            redFrame.classList.add("redFrameGame")
            blueFrame.classList.add("blueFrameGame")
            redImg.classList.add("redImageGame")
            blueImg.classList.add("blueImageGame")
            redName.classList.add("redNameGame")
            blueName.classList.add("blueNameGame")
            redFrame.src = "images/frame.png"
        blueFrame.src = "images/frame.png"
        blueImg.src = bluePlayer.avatar
        redImg.src = redPlayer.avatar
        container.appendChild(redFrame)
        container.appendChild(blueFrame)
        container.appendChild(redImg)
        container.appendChild(blueImg)
        container.appendChild(redName)
        container.appendChild(blueName)

            img.src = blueCastle.image
            img.alt = 'image'; 
            img1.src = redCastle.image
            img1.alt = 'image'; 
            container.appendChild(img);
            
            container.appendChild(img1);
            img.classList.add("blueCastle");
            img1.classList.add("redCastle");
         
            const blutext = document.createTextNode(`resorces💰: ${blueCastle.resource} `)
            const blutext1 = document.createTextNode(`wining rounds🥇: ${blueCastle.winingRounds} `)
            const redtext = document.createTextNode(`resorces💰: ${redCastle.resource} `)
            const redtext1 = document.createTextNode(`wining rounds🥇: ${redCastle.winingRounds} `)
            const blutextDiv = document.createElement('div')
            const redTextDiv = document.createElement('div')
            const blueInfoDiv = document.createElement('div')
            const redInfoDiv = document.createElement('div')
            blutextDiv.id = "blueText"
            redTextDiv.id = "redText"
            redTextDiv.style.display = "flex"
            redTextDiv.style.justifyContent = "center"
            redTextDiv.style.width = "400px"
            blutextDiv.style.display = "flex"
            blutextDiv.style.justifyContent = "center"
            blutextDiv.style.width = "400px"
         
            blutextDiv.appendChild(blutext)
            blutextDiv.appendChild(blutext1)
            redTextDiv.appendChild(redtext)
            redTextDiv.appendChild(redtext1)
            blueInfoDiv.append(blutextDiv)
            redInfoDiv.append(redTextDiv)
         
             blueCastleInfo.appendChild(blueInfoDiv)
             redCastleInfo.appendChild(redTextDiv)
            

             callBack(img , img1 , redFrame , blueFrame)
           
        }

}