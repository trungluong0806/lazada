const Add_to_Cart = document.getElementById("add_to_cart")
const Pname = document.getElementById("name")
const Pprice = document.getElementById("price")
const vertical_navigation = document.getElementById("vertical_navigation")
const menu_icon = document.getElementById("menu_icon")
const overlay = document.getElementById("overlay")
const Close = document.getElementById("Close")
const search_icon = document.getElementById("search_icon")
const collapsed_content = document.getElementById("collapsed_content")
const collapsed_content_styles = window.getComputedStyle(collapsed_content)
const secondary_image = document.querySelectorAll(".secondary_image")
const main_image = document.getElementById("main_image")
const quantity_selector = document.getElementById("quantity_selector")
const main = document.getElementById("main")
const Order_id = Pname.getAttribute("class")
const inventory =document.getElementById("inventory")
const checkout_buttons = document.querySelectorAll(".addtocart")
const number_in_cart = document.getElementById("number_in_cart")
const addCart = document.getElementById("addCart")
const image = document.querySelectorAll(".image")


if (!(localStorage.getItem("number_in_cart"))){
    localStorage.setItem("number_in_cart",0)
    number_in_cart.textContent = localStorage.getItem("number_in_cart")
}
else{
    number_in_cart.textContent = localStorage.getItem("number_in_cart")
}

addCart.addEventListener("click", function(){
    let item_number = parseInt(localStorage.getItem("number_in_cart"))
    item_number = item_number +1
    localStorage.setItem("number_in_cart", item_number)
    number_in_cart.textContent = localStorage.getItem("number_in_cart")
})

if (inventory.textContent==='0'){
    for (let i=0; i < checkout_buttons.length; i++ ){
        checkout_buttons[i].disabled = true
        checkout_buttons[i].style.backgroundColor = "grey"
        checkout_buttons[i].style.color = "black"
    }
}

if (main_image.naturalHeight < main_image.naturalWidth){
    main_image.style.width="100%"
    main_image.style.height="auto"
}
else {
    main_image.style.width="auto"
    main_image.style.height="100%"
}

for (let i=0; i < secondary_image.length; i++){
    if (secondary_image[i].naturalWidth > secondary_image[i].naturalHeight){
        secondary_image[i].style.width = "100%"
        secondary_image[i].style.height= "auto"
    }
    else{
        secondary_image[i].style.width = "auto"
        secondary_image[i].style.height= "100%"
    }
}




for (let i=0; i<secondary_image.length; i++){
    secondary_image[i].addEventListener("click", function(){
        main_image.setAttribute('src',secondary_image[i].getAttribute('src'))
    if (secondary_image[i].naturalWidth > secondary_image[i].naturalHeight){
        main_image.style.width="100%"
        main_image.style.height="auto"
        if (i==0){
            image[i].style.display="flex"
            image[i].style.display="flex_end"
        }
        else if (i===(secondary_image.length-1)){
            image[i].style.display="flex"
            image[i].style.display="flex_start"
        }
        
    } 
    else{
        main_image.style.width="auto"
        main_image.style.height="100%"
    }
    })
    
}



Close.addEventListener("click",function(){
    vertical_navigation.style.display="none"
    overlay.style.display="none"
})

search_icon.addEventListener("click",function(){
    if (collapsed_content_styles.getPropertyValue("display") === 'none'){
        collapsed_content.style.display="block"
    }
    else {
        collapsed_content.style.display="none"
    }
    
})

menu_icon.addEventListener("click",function(){
    vertical_navigation.style.display="block"
    overlay.style.display="block"

    

})


Add_to_Cart.addEventListener("click", function(){
    var item_info = {
        Item_id: Order_id,
        Item_name: Pname.textContent,
        Item_price: parseInt(Pprice.textContent),
        Quantity: parseInt(quantity_selector.value),
        Total: parseInt(Pprice.textContent) * parseInt(quantity_selector.value)}
    var image_path = {
        path: main.getAttribute("src")
    }



    


    if (!(localStorage.cart)){
        item= `[${JSON.stringify(item_info)}]`
        localStorage.setItem("cart", item)
        path_array =`[${JSON.stringify(image_path)}]`
        localStorage.setItem("cart_image",path_array)
    }
    else{
        item= JSON.parse(localStorage.getItem("cart"))
        item.push(item_info)
        path_array = JSON.parse(localStorage.getItem("cart_image"))
        path_array.push(image_path)
        for (let i =0; i< item.length; i++){
            item[i]=JSON.stringify(item[i])
            path_array[i] = JSON.stringify(path_array[i])
    } 
        
        localStorage.setItem("cart", `[${item}]`);
        localStorage.setItem("cart_image",`[${path_array}]`)
    }
    
})