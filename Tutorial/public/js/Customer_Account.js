const personal_detail = document.querySelector(".personal_detail")
const myOrder = document.querySelector(".myOrder")
const Personal_info = document.getElementById("Personal_info")
const my_Order = document.getElementById("my_Order")

myOrder.addEventListener("click", function(){
    Personal_info.style.transform = "translateX(-100%)"
    my_Order.style.transform = "translateX(-100%)"
})

personal_detail.addEventListener("click", function(){
    Personal_info.style.transform = "translateX(0)"
    my_Order.style.transform = "translateX(0)"
})