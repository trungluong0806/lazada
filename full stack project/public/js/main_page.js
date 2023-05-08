const element = document.querySelector(".element")
const button = document.querySelectorAll(".link_container")
for (let i = 0; i<button.length; i++){
    button[i].addEventListener("click",function(){
        button[0].style.background="rgb(204, 200, 200)"
        button[1].style.background="rgb(204, 200, 200)"
        button[2].style.background="rgb(204, 200, 200)"
        button[3].style.background="rgb(204, 200, 200)"
        button[i].style.backgroundImage="linear-gradient(108.5deg, rgba(231, 69, 54, 0.82) 11.2%, rgba(255, 181, 17, 0.82) 68%)"
    })
    
} 