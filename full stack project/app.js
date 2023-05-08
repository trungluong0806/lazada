const mysql = require("mysql");
const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.use(express.static('public'))



var database_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lacussaber12345@@@",
    database: "Customers_info"
});

let output
function assigning(rows){
    output = rows
}

app.listen(3500, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT 3000");
});





database_connection.connect(async(err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err)
        return;
    }
    console.log("Connected to the Database");
    let query = "SELECT * From Products";
    database_connection.query(query, (err,rows) => {
        if (err){
            console.log("internal error", err);
            return;
        }
        assigning(rows);
        console.log(output)
        app.get("/",(request, response) =>{
            response.render("lazada_customer_main_page.ejs", {result: output})
        })
       /*  for (let i=0; i < output.length; i++){
            app.get(output[i].Url, (request, response) => {
                response.render("product_detail.ejs", {result: output[i]})
                console.log("successful")
            })
        }    */

       
    

    })
})








