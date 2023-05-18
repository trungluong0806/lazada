function Vendor_log_in(){
    Vendor.findOne({username: input_info.username}).then(async (check) =>{
        if (check) {
            if (check.password === input_info.password){
                const docs = await Product_info.find({vendorId: check._id});
                response.render('viewmyproduct', { products: docs });
                app.post("/", upload.array('image',4), async (request, response)=>{
                    const update_body = request.body
                    const filter = {_id: update_body.product_id}
                    if (update_body.action === "update"){
                        const update ={_id: update_body.product_id, productName: update_body.product_name, vendorId: update_body.Vendor_id, productPrice: update_body.product_price, productBrand: update_body.product_brand, productLocation: update_body.product_location, productCFO: update_body.CFO, Inventory: update_body.inventory, productDescription: update_body.product_description}
                        const doc = await Product_info.findOneAndUpdate(filter, update, {new: true})
                    }
                    else if (update_body.action === "delete") {
                        const rem= await Product_info.findOneAndRemove(filter)
                    }
                    else {
                        let imageArray = request.files
                        console.log(imageArray)
                        const public_string = 'public'
                        let imagePath = imageArray[0].path
                        imagePath = imagePath.replace(public_string, "")
                        let image1Path = imageArray[1].path
                        image1Path = image1Path.replace(public_string, "")
                        let image2Path = imageArray[2].path
                        image2Path = image2Path.replace(public_string, "")
                        let image3Path = imageArray[0].path
                        image3Path = image3Path.replace(public_string, "")
                        Product_info.create({productName: update_body.product_name, productPrice: update_body.product_price, productBrand: update_body.product_brand, productLocation: update_body.product_location, productCFO: update_body.CFO, Inventory: update_body.inventory, productDescription: update_body.product_description, imagePath: imagePath, image1Path: image1Path, image2Path: image2Path, image3Path: image3Path})
                    }
                    
                    response.redirect("/viewmyproduct")
                  }) 
    
            }
            else {
    
            }
        }
        else {
    
        }
    })
}
