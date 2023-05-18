const localStorage_length = JSON.parse(localStorage.getItem("cart"))
const localStorage_image = JSON.parse(localStorage.getItem("cart_image"))
const table_cart = document.querySelector("table")
const totalmoney = document.querySelectorAll("#totalMoney")
console.log(localStorage_length)
let total_money =0
let number_in_cart = document.querySelectorAll("#totalItems")


for (let i=0; i< number_in_cart.length; i++){
    number_in_cart[i].textContent = `${localStorage_length.length}`
}

let number_item = parseInt(localStorage.getItem("number_in_cart"))




const checkout = document.getElementById("checkout")
checkout.addEventListener("click", function(){
    localStorage.setItem("cart",'[]')
    localStorage.setItem("cart_image",'[]')
    localStorage.setItem("number_in_cart",0)
})


for (let i=0; i < localStorage_length.length; i++){
    const input_field = document.createElement("input")
    const row = document.createElement("tr")
    const first_column = document.createElement("td")
    first_column.setAttribute("id", "productsImage")
    first_column.innerHTML=`<img src= ${localStorage_image[i].path} alt="">`
    row.append(first_column)
    const second_column = document.createElement("td")
    second_column.textContent = `${localStorage_length[i].Item_name}`
    second_column.setAttribute("id", "productsTitle")
    row.append(second_column)
    const third_column = document.createElement("td")
    third_column.setAttribute("id", "productsQuantity")
    third_column.textContent = `${localStorage_length[i].Quantity}`
    row.append(third_column)
    const fourth_column = document.createElement("td")
    fourth_column.setAttribute("id", "productsPrice")
    fourth_column.textContent=`${localStorage_length[i].Item_price}`
    row.append(fourth_column)
    const fifth_column = document.createElement("td")
    fifth_column.setAttribute("id", "productsDelete")
    fifth_column.innerHTML=`<button class="remove_item"><i class="fa-solid fa-x"></button>`
    row.append(fifth_column)
    table_cart.append(row)


    
    
    row.setAttribute("id","listItem")
    input_field.style.display="none"
    checkout.append(input_field)
    input_field.setAttribute("class","input_field")
    input_field.setAttribute("id",`item${i}`)
    input_field.setAttribute("name",`item${i}`)
    input_field.setAttribute("value", JSON.stringify(localStorage_length[i]))
    total_money = total_money + localStorage_length[i].Total
}
const remove_item = document.querySelectorAll(".remove_item")
const rows = document.querySelectorAll("tr")
for (let i=0; i<remove_item.length; i++){
    number_item = number_item -1
    localStorage.setItem("number_in_cart", number_item)
    remove_item[i].addEventListener("click", function(){
        rows[i].style.display="none"
        localStorage_length.splice(i,1)
        localStorage_image.splice(i,1)
        for (let k=0; k<localStorage_length.length; k++){
            localStorage_length[k]=JSON.stringify(localStorage_length[k])
            localStorage_image[k]=JSON.stringify(localStorage_image[k])
        }
        localStorage.setItem("cart", `[${localStorage_length}]`)
        localStorage.setItem("cart_image",`[${localStorage_image}]`)
        window.location.reload()
    })
}

for (let i=0; i < totalmoney.length; i++){
    totalmoney[i].textContent = `${total_money}`
}


