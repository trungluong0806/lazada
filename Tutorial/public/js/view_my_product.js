const pid = document.querySelectorAll("#pid")
const pname = document.querySelectorAll("#pname")
const pprice = document.querySelectorAll("#pprice")
const pbrand = document.querySelectorAll("#pbrand")
const plocation = document.querySelectorAll("#plocation")
const pCFO = document.querySelectorAll("#pCFO")
const pDescription = document.querySelectorAll("#pDescription")
const pinventory = document.querySelectorAll("#pinventory")
const rows = document.querySelectorAll("#rows")
const product_id = document.getElementById("product_id")
const product_name = document.getElementById("product_name")
const product_price = document.getElementById("product_price")
const product_brand = document.getElementById("product_brand")
const product_location = document.getElementById("product_location")
const CFO = document.getElementById("CFO")
const inventory = document.getElementById("inventory")
const product_description = document.getElementById("product_description")
const image_upload = document.getElementById("image_upload")
const action = document.getElementById("action")
const product_id_cotainer = document.getElementById("product_id_cotainer")
const pvid = document.querySelectorAll("#pvid")
const Vendor_id = document.getElementById("Vendor_id")
const uploader = document.getElementById("uploader")
const error = document.getElementById("error")

uploader.addEventListener("change",function(){
    if (uploader.files.length != 4){
        error.style.display="block"
        submit.disabled=true
        submit.style.backgroundColor="grey"
        error.style.color = "red"
    }

    else{

    }
})


action.addEventListener("change", function(){
    console.log(action.value)
    if (!(action.value==="create")){
        image_upload.style.display="none"

        
    }
    else {
        image_upload.style.display="block"
        
    
    }
})



for (let i=0; i<rows.length; i++){
    pname[i].addEventListener("click", function(){
        action.value = "update"
        product_id.value = pid[i].textContent
        product_name.value = pname[i].textContent
        product_price.value= pprice[i].textContent
        product_brand.value= pbrand[i].textContent
        product_location.value =plocation[i].textContent
        CFO.value = pCFO[i].textContent
        product_description.value =pDescription[i].textContent
        inventory.value = pinventory[i].textContent
        Vendor_id.value = pvid[i].textContent
    })
}