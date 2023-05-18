const uploader = document.getElementById("uploader")
const error = document.getElementById("error")
const submit = document.getElementById("submit")
const productName = document.getElementById("productName")

uploader.addEventListener("change",function(){
    if (uploader.files.length < 4 && uploader.files.length > 4){
        error.textContent = "Exactly 4 images are allowed"
        submit.disabled=true
    }
})

