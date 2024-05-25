export default class Toast{
    constructor(){
        
    }


    alertToast(element , text , className){
        console.log("i am working toast")
        var toast = document.createElement("div")
      
        toast.classList.add(className)

        toast.textContent = text
        
        element.appendChild(toast)
        setTimeout(()=>{
            // toast.classList.remove("alertToast")
            toast.classList.add("killAlertToast")
            toast.remove()
        } , 1000)
    }


    gameBeginToast(element){
        console.log("i am working toast")
        var toast = document.createElement("div")
        var button = document.createElement("div")
        button.classList.add("gameBeginToastButton")
        toast.appendChild(button)
        button.textContent ="hazem"
        button.addEventListener("click", ()=>{
            toast.style.transform = "translateY(-100%)"
            localStorage.setItem("gameOn" ,true)
        })
      
        toast.classList.add("gameBeginToast")
        element.appendChild(toast)

    }

}