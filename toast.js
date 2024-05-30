export default class Toast{
    constructor(){
        
    }


    alertToast(element , text , className ,type){
        var bg
        var color
        switch(type){
            case "alert" : (bg = "#ebc8c4" , color = "#ad2f2d")
            break;
            case "worning" : (bg = "#f8f3d6" , color = "#4e7896")
            break; 
            case "info" : (bg = "#cce8f4" , color = "#668cab")
            break;
            case "success" : (bg = "#def2d6" , color = "#5a6e51")
            break;
        }
        console.log("i am working toast")
        var toast = document.createElement("div")
        var diamand = document.createElement("div")
        diamand.style.width = "20px"
        diamand.style.height = "20px"
        diamand.style.position = "absolute"
        diamand.style.transform = "rotate(45deg)"
        diamand.style.top = "1rem"
        diamand.style.left = "-11px"
        diamand.style.borderLeft =`${color} 1px solid`
        diamand.style.borderBottom = `${color} 1px solid`


        diamand.style.backgroundColor = bg
        toast.style.backgroundColor = bg
        toast.style.color = color
        toast.style.border = `${color} 1px solid`



        diamand.style.zIndex="444"




        
        
        toast.classList.add(className)
        
        toast.textContent = text
        toast.appendChild(diamand)
        
        element.appendChild(toast)
        setTimeout(()=>{
            // toast.classList.remove("alertToast")
            toast.classList.add("killAlertToast")
            toast.remove()
        } , 2000)
    }

    alertToastBlue(element , text , className  ,type){
        var bg
        var color
        switch(type){
            case "alert" : (bg = "#ebc8c4" , color = "#ad2f2d")
            break;
            case "worning" : (bg = "#f8f3d6" , color = "#4e7896")
            break; 
            case "info" : (bg = "#cce8f4" , color = "#668cab")
            break;
            case "success" : (bg = "#def2d6" , color = "#5a6e51")
            break;
        }
        console.log("i am working toast")
        var toast = document.createElement("div")
        var diamand = document.createElement("div")
        diamand.style.width = "20px"
        diamand.style.height = "20px"
        diamand.style.position = "absolute"
        diamand.style.transform = "rotate(45deg)"
        diamand.style.top = "1rem"
        diamand.style.right = "-11px"
        diamand.style.zIndex="444"

        diamand.style.borderRight =`${color} 1px solid`
        diamand.style.borderTop = `${color} 1px solid`


        diamand.style.backgroundColor = bg
        toast.style.backgroundColor = bg
        toast.style.color = color
        toast.style.border = `${color} 1px solid`


        
        
        toast.classList.add(className)
        
        toast.textContent = text
        toast.appendChild(diamand)
        
        element.appendChild(toast)
        setTimeout(()=>{
            // toast.classList.remove("alertToast")
            toast.classList.add("killAlertToast")
            toast.remove()
        } , 2000)
    }


    gameBeginToast(element , redPlayer , bluePlayer){
        console.log("i am working toast")
        var toast = document.createElement("div")
        var button = document.createElement("div")
        var redName = document.createElement("div")
        var blueName = document.createElement("div")
        redName.textContent = redPlayer.name
        blueName.textContent = bluePlayer.name
        var redFrame = document.createElement("img")
        var blueFrame = document.createElement("img")
        var blueImg = document.createElement("img")
        var redImg = document.createElement("img")
        
        redFrame.classList.add("redFrame")
        blueFrame.classList.add("blueFrame")
        redImg.classList.add("redImage")
        blueImg.classList.add("blueImage")
        redName.classList.add("redName")
        blueName.classList.add("blueName")


        redFrame.src = "images/frame.png"
        blueFrame.src = "images/frame.png"
        blueImg.src = bluePlayer.avatar
        redImg.src = redPlayer.avatar
        toast.appendChild(redFrame)
        toast.appendChild(blueFrame)
        toast.appendChild(redImg)
        toast.appendChild(blueImg)
        toast.appendChild(redName)
        toast.appendChild(blueName)

        button.classList.add("gameBeginToastButton")
        toast.appendChild(button)
        button.textContent ="start"
        button.addEventListener("click", ()=>{
            toast.style.transform = "translateY(-100%)"
            localStorage.setItem("gameOn" ,true)
            const audio = new Audio("sounds/backgroundEffect.mp3")  
            audio.volume = 0.05
            audio.loop = true
                 audio.play();
        })
      
        toast.classList.add("gameBeginToast")
        element.appendChild(toast)

    }



blueWinToast(element , redPlayer , bluePlayer){
    var toast = document.createElement("div")
    var redName = document.createElement("div")
    var blueName = document.createElement("div")
    redName.textContent = redPlayer.name
    blueName.textContent = bluePlayer.name
    var redFrame = document.createElement("img")
    var blueFrame = document.createElement("img")
    var blueImg = document.createElement("img")
    var redImg = document.createElement("img")
    var vectoryPanel = document.createElement("img")
    var vectoryFrame = document.createElement("img")


    
    redFrame.classList.add("redFrameBlueWin")
    blueFrame.classList.add("blueFrameBlueWin")
    redImg.classList.add("redImageBlueWin")
    blueImg.classList.add("blueImageBlueWin")
    redName.classList.add("redNameBlueWin")
    blueName.classList.add("blueNameBlueWin")
    vectoryPanel.classList.add("vectoryPanel")
    vectoryFrame.classList.add("vectoryFrame")


    redFrame.src = "images/frame.png"
    blueFrame.src = "images/frame.png"
    vectoryPanel.src ="images/vectoryPanel.png"
    vectoryFrame.src  ="images/vectoryFrame.png"
    blueImg.src = bluePlayer.avatar
    redImg.src = redPlayer.avatar
    toast.appendChild(redFrame)
    toast.appendChild(blueFrame)
    toast.appendChild(redImg)
    toast.appendChild(blueImg)
    toast.appendChild(redName)
    toast.appendChild(blueName)
    toast.appendChild(vectoryPanel)
    toast.appendChild(vectoryFrame)

    toast.classList.add("gameBeginToast")
    element.appendChild(toast)


}

}

