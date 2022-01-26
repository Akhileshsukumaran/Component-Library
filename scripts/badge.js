// script for badge component 

let badge_element = document.getElementById("btn-toggle-badge")
let toogle_btn = document.getElementById("btn-toogle")


let btn_hide = () => {
    return badge_element.style.visibility = "hidden"
}

let btn_show = () => {
    return badge_element.style.visibility = "visible"
}

toogle_btn.addEventListener("click", function(){
    if(badge_element.style.visibility == "visible")
    {
        btn_hide()
    }
    else
    {
        btn_show()
    }
})