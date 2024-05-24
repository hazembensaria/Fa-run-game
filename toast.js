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


}