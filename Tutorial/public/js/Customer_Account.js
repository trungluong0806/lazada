const personal_detail = document.querySelector(".personal_detail")
const myOrder = document.querySelector(".myOrder")
const Personal_info = document.getElementById("Personal_info")
const my_Order = document.getElementById("my_Order")
const log_out = document.getElementById("log_out")

log_out.addEventListener("click", function(){
    localStorage.setItem("cart",'[]')
    localStorage.setItem("cart_image",'[]')
    localStorage.setItem("number_in_cart",0)
    })

myOrder.addEventListener("click", function(){
    Personal_info.style.transform = "translateX(-100%)"
    my_Order.style.transform = "translateX(-100%)"
})

personal_detail.addEventListener("click", function(){
    Personal_info.style.transform = "translateX(0)"
    my_Order.style.transform = "translateX(0)"
})