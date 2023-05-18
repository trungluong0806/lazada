const element = document.querySelector(".element")
const button = document.querySelectorAll(".link_container")
const vertical_navigation = document.getElementById("vertical_navigation")
const main_container = document.getElementById("main_container")
const menu_icon = document.getElementById("menu_icon")
const overlay = document.getElementById("overlay")
const filter_icon = document.getElementById("filter_icon")
const Close = document.getElementById("Close")
const search_icon = document.getElementById("search_icon")
const collapsed_content = document.getElementById("collapsed_content")
const collapsed_content_styles = window.getComputedStyle(collapsed_content)
const main_image = document.querySelectorAll("#main_image")
console.log(main_image)
const number_in_cart = document.getElementById("number_in_cart")




for (let i=0; i<main_image.length; i++){
    if (main_image[i].naturalHeight < main_image[i].naturalWidth){
        main_image[i].style.width="100%"
        main_image[i].style.height="auto"
    }
    else {
        main_image[i].style.width="auto"
        main_image[i].style.height="100%"
    }
}

if (!(localStorage.getItem("number_in_cart"))){
    localStorage.setItem("number_in_cart",0)
    number_in_cart.textContent = localStorage.getItem("number_in_cart")
}
else{
    number_in_cart.textContent = localStorage.getItem("number_in_cart")
}







Close.addEventListener("click",function(){
    vertical_navigation.style.display="none"
    overlay.style.display="none"
})

menu_icon.addEventListener("click",function(){
    vertical_navigation.style.display="block"
    overlay.style.display="block"

    

})

search_icon.addEventListener("click",function(){
    if (collapsed_content_styles.getPropertyValue("display") === 'none'){
        collapsed_content.style.display="block"
    }
    else {
        collapsed_content.style.display="none"
    }
    
})

for (let i = 0; i<button.length; i++){
    button[i].addEventListener("click",function(){
        button[0].style.background="rgb(204, 200, 200)"
        button[1].style.background="rgb(204, 200, 200)"
        button[2].style.background="rgb(204, 200, 200)"
        button[3].style.background="rgb(204, 200, 200)"
        button[i].style.backgroundImage="linear-gradient(108.5deg, rgba(231, 69, 54, 0.82) 11.2%, rgba(255, 181, 17, 0.82) 68%)"
    })
    
} 