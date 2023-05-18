const rows = document.querySelectorAll(".row")
const result_id = document.querySelectorAll(".result_id")
const Order_id = document.getElementById("Order_id")
for (let i=0; i<rows.length; i++){
    result_id[i].addEventListener("click", function(){
        Order_id.value = rows[i].getAttribute("id")
    }
    )}
   
